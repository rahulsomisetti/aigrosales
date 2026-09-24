// Central Application Configuration
export const SITE_CONFIG = {
  companyName: 'AIGroSales',
  tagline: 'AI-powered marketing for businesses ready to grow',
  supportEmail: 'hello@aigrosales.com',
  phoneNumber: '+1 346 869 9154',
  phoneFormatted: '+1 (346) 869-9154',
  phoneRaw: '13468699154',
  address: 'El Dorado Blvd, Houston, TX 77059, USA',
  whatsappUrl: 'https://wa.me/13468699154',
  siteUrl: 'https://aigrosales.com',

  // Web3Forms Access Key for email delivery to hello@aigrosales.com
  web3formsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    process.env.VITE_WEB3FORMS_ACCESS_KEY ||
    '5d2acb9e-fc52-4699-a026-1d5930c54302',
};
