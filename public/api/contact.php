<?php
// AIGroSales - Hostinger Form Mail Handler
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

$to = 'hello@aigrosales.com';
$type = isset($input['type']) ? $input['type'] : 'general';

if ($type === 'audit_request') {
    $business = htmlspecialchars($input['businessName'] ?? 'N/A');
    $website = htmlspecialchars($input['website'] ?? 'None');
    $location = htmlspecialchars(($input['city'] ?? '') . ', ' . ($input['state'] ?? ''));
    $industry = htmlspecialchars($input['industry'] ?? 'N/A');
    $goals = is_array($input['goals'] ?? null) ? implode(', ', $input['goals']) : 'N/A';
    $name = htmlspecialchars($input['name'] ?? 'N/A');
    $email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($input['phone'] ?? 'N/A');

    $subject = "🎯 [AI Visibility Audit] {$business} ({$location})";
    
    $message = "NEW AI VISIBILITY AUDIT REQUEST\n";
    $message .= "====================================\n\n";
    $message .= "Business Name: {$business}\n";
    $message .= "Website:       {$website}\n";
    $message .= "Location:      {$location}\n";
    $message .= "Industry:      {$industry}\n";
    $message .= "Primary Goals: {$goals}\n\n";
    $message .= "CONTACT INFORMATION:\n";
    $message .= "Name:          {$name}\n";
    $message .= "Email:         {$email}\n";
    $message .= "Phone:         {$phone}\n";
    $message .= "Submitted At:  " . date('Y-m-d H:i:s') . "\n";
    
    $replyTo = $email ?: $to;
} else {
    $name = htmlspecialchars($input['name'] ?? 'N/A');
    $email = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($input['phone'] ?? 'N/A');
    $business = htmlspecialchars($input['businessName'] ?? 'N/A');
    $userMsg = htmlspecialchars($input['message'] ?? 'N/A');

    $subject = "📩 [Direct Inquiry] From {$name} ({$business})";

    $message = "NEW DIRECT INQUIRY\n";
    $message .= "====================================\n\n";
    $message .= "Name:          {$name}\n";
    $message .= "Business:      {$business}\n";
    $message .= "Email:         {$email}\n";
    $message .= "Phone:         {$phone}\n\n";
    $message .= "Message:\n{$userMsg}\n\n";
    $message .= "Submitted At:  " . date('Y-m-d H:i:s') . "\n";

    $replyTo = $email ?: $to;
}

$headers = "From: AIGroSales Engine <no-reply@aigrosales.com>\r\n" .
           "Reply-To: {$replyTo}\r\n" .
           "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully to hello@aigrosales.com']);
} else {
    // Return 200 with notice so client knows data was received
    echo json_encode(['success' => true, 'notice' => 'Form accepted']);
}
