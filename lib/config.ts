export const weddingConfig = {
  couple: {
    bride: 'Bahreab',
    groom: 'Fikir',
    brideAlt: 'ባህርያብ',
    groomAlt: 'ፍክር',
  },
  weddingDate: new Date('2026-06-25T09:00:00').getTime(),
  events: [
    {
      id: 1,
      name: 'THE CROWNING (MELS)',
      nameAmharic: 'ስክዋት (መልስ)',
      time: '09:00 AM',
      location: 'Sheraton Addis Ababa',
      description: 'Traditional Ethiopian crowning ceremony',
      icon: '👑',
    },
    {
      id: 2,
      name: 'THE CELEBRATION (KELEKEL)',
      nameAmharic: 'ዝግበት (ቀልቀል)',
      time: '12:00 PM',
      location: 'Sheraton Ballroom',
      description: 'Reception and celebration feast',
      icon: '🍽️',
    },
    {
      id: 3,
      name: 'THE RECEPTION',
      nameAmharic: 'መልስ & ቅልቅል',
      time: '05:30 PM',
      location: 'Sheraton Addis Ababa',
      description: 'Evening reception and dancing',
      icon: '🎉',
    },
  ],
  gallery: [
    {
      id: 1,
      image: '/couple-portrait.png',
      title: 'The Couple',
      description: 'Bahreab & Fikir in traditional Habesha attire',
    },
    {
      id: 2,
      image: '/agelgil-basket.png',
      title: 'Traditional Agelgil',
      description: 'Authentic Ethiopian ceremonial basket',
    },
    {
      id: 3,
      image: '/couple-portrait.png',
      title: 'Wedding Moment',
      description: 'A cherished moment from our celebration',
    },
  ],
  admin: {
    email: 'bahreafeleke@gmail.com',
  },
  web3forms: {
    accessKey: '47fe4974-7c5a-496a-b1b1-2c6945e31f52',
    apiEndpoint: 'https://api.web3forms.com/submit',
  },
  location: {
    city: 'Addis Ababa',
    country: 'Ethiopia',
    timezone: 'EAT',
  },
}
