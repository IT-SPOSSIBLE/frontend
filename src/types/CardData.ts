// data/cardData.ts

export interface CardDataType {
  id: number;
  title: string;
  price: number;
  status: string;
  created_at: string;
  category: {
    id: number;
    category_name: string;
    created_at: string;
    created_by: number;
  };
  motocycleImage: {
    id: number;
    image: string; // image filename or full URL
    is_primary: boolean;
    uploaded_at: string;
    moto: number;
  };
}

// Picha zote zinazotumika
import boxer1 from '../assets/boxer1.jpeg';
import tvs from '../assets/tvs1.jpeg';
import honda1 from '../assets/honda1.jpeg';
import yamaha1 from '../assets/yamaha1.jpeg';

import boxer2 from '../assets/boxer2.jpeg';
import tvs2 from '../assets/tvs2.jpeg';
import honda2 from '../assets/honda2.jpeg';
import yamaha2 from '../assets/yamaha2.jpeg';

import boxer3 from '../assets/boxer3.jpeg';
import tvs3 from '../assets/tvs3.jpeg.jpeg';
import honda3 from '../assets/honda3.jpeg';
import yamaha3 from '../assets/yamaha3.jpeg';

import boxer4 from '../assets/boxer4.jpeg';
import tvs4 from '../assets/tvs4.jpeg';
import honda4 from '../assets/honda4.jpeg';
import yamaha5 from '../assets/yamha5.jpeg';

export const cardData: CardDataType[] = [
  {
    id: 1,
    title: 'Boxer X150',
    price: 1500000,
    status: 'available',
    created_at: '2025-05-25T03:12:00Z',
    category: {
      id: 1,
      category_name: 'Boxer',
      created_at: '2025-05-24T12:00:00Z',
      created_by: 101,
    },
    motocycleImage: {
      id: 101,
      image: boxer1,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:00Z',
      moto: 1,
    },
  },
  {
    id: 2,
    title: 'TVS HLX 125',
    price: 1300000,
    status: 'available',
    created_at: '2025-05-25T03:12:05Z',
    category: {
      id: 2,
      category_name: 'Tvs',
      created_at: '2025-05-24T12:10:00Z',
      created_by: 102,
    },
    motocycleImage: {
      id: 102,
      image: tvs,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:05Z',
      moto: 2,
    },
  },
  {
    id: 3,
    title: 'Honda Ace CB125',
    price: 1600000,
    status: 'available',
    created_at: '2025-05-25T03:12:10Z',
    category: {
      id: 3,
      category_name: 'Honda',
      created_at: '2025-05-24T12:20:00Z',
      created_by: 103,
    },
    motocycleImage: {
      id: 103,
      image: honda1,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:10Z',
      moto: 3,
    },
  },
  {
    id: 4,
    title: 'Yamaha Crux Rev',
    price: 1550000,
    status: 'available',
    created_at: '2025-05-25T03:12:15Z',
    category: {
      id: 4,
      category_name: 'Yamaha',
      created_at: '2025-05-24T12:30:00Z',
      created_by: 104,
    },
    motocycleImage: {
      id: 104,
      image: yamaha1,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:15Z',
      moto: 4,
    },
  },
  {
    id: 5,
    title: 'Boxer X125',
    price: 1400000,
    status: 'available',
    created_at: '2025-05-25T03:12:20Z',
    category: {
      id: 1,
      category_name: 'Boxer',
      created_at: '2025-05-24T12:00:00Z',
      created_by: 101,
    },
    motocycleImage: {
      id: 105,
      image: boxer2,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:20Z',
      moto: 5,
    },
  },
  {
    id: 6,
    title: 'TVS HLX 100',
    price: 1250000,
    status: 'available',
    created_at: '2025-05-25T03:12:25Z',
    category: {
      id: 2,
      category_name: 'Tvs',
      created_at: '2025-05-24T12:10:00Z',
      created_by: 102,
    },
    motocycleImage: {
      id: 106,
      image: tvs2,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:25Z',
      moto: 6,
    },
  },
  {
    id: 7,
    title: 'Honda CD 110',
    price: 1500000,
    status: 'available',
    created_at: '2025-05-25T03:12:30Z',
    category: {
      id: 3,
      category_name: 'Honda',
      created_at: '2025-05-24T12:20:00Z',
      created_by: 103,
    },
    motocycleImage: {
      id: 107,
      image: honda2,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:30Z',
      moto: 7,
    },
  },
  {
    id: 8,
    title: 'Yamaha YBR 125',
    price: 1650000,
    status: 'available',
    created_at: '2025-05-25T03:12:35Z',
    category: {
      id: 4,
      category_name: 'Yamaha',
      created_at: '2025-05-24T12:30:00Z',
      created_by: 104,
    },
    motocycleImage: {
      id: 108,
      image: yamaha2,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:35Z',
      moto: 8,
    },
  },
  {
    id: 9,
    title: 'Boxer BM150',
    price: 1700000,
    status: 'available',
    created_at: '2025-05-25T03:12:40Z',
    category: {
      id: 1,
      category_name: 'Boxer',
      created_at: '2025-05-24T12:00:00Z',
      created_by: 101,
    },
    motocycleImage: {
      id: 109,
      image: boxer3,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:40Z',
      moto: 9,
    },
  },
  {
    id: 10,
    title: 'TVS XL 100',
    price: 1200000,
    status: 'available',
    created_at: '2025-05-25T03:12:45Z',
    category: {
      id: 2,
      category_name: 'Tvs',
      created_at: '2025-05-24T12:10:00Z',
      created_by: 102,
    },
    motocycleImage: {
      id: 110,
      image: tvs3,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:45Z',
      moto: 10,
    },
  },
  {
    id: 11,
    title: 'Honda Shine SP',
    price: 1800000,
    status: 'available',
    created_at: '2025-05-25T03:12:50Z',
    category: {
      id: 3,
      category_name: 'Honda',
      created_at: '2025-05-24T12:20:00Z',
      created_by: 103,
    },
    motocycleImage: {
      id: 111,
      image: honda3,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:50Z',
      moto: 11,
    },
  },
  {
    id: 12,
    title: 'Yamaha FZ-S',
    price: 1900000,
    status: 'available',
    created_at: '2025-05-25T03:12:55Z',
    category: {
      id: 4,
      category_name: 'Yamaha',
      created_at: '2025-05-24T12:30:00Z',
      created_by: 104,
    },
    motocycleImage: {
      id: 112,
      image: yamaha3,
      is_primary: true,
      uploaded_at: '2025-05-25T03:12:55Z',
      moto: 12,
    },
  },
  {
    id: 13,
    title: 'Boxer CT 100',
    price: 1000000,
    status: 'available',
    created_at: '2025-05-25T03:13:00Z',
    category: {
      id: 1,
      category_name: 'Boxer',
      created_at: '2025-05-24T12:00:00Z',
      created_by: 101,
    },
    motocycleImage: {
      id: 113,
      image: boxer4,
      is_primary: true,
      uploaded_at: '2025-05-25T03:13:00Z',
      moto: 13,
    },
  },
  {
    id: 14,
    title: 'TVS Neo',
    price: 1100000,
    status: 'available',
    created_at: '2025-05-25T03:13:05Z',
    category: {
      id: 2,
      category_name: 'Tvs',
      created_at: '2025-05-24T12:10:00Z',
      created_by: 102,
    },
    motocycleImage: {
      id: 114,
      image: tvs4,
      is_primary: true,
      uploaded_at: '2025-05-25T03:13:05Z',
      moto: 14,
    },
  },
  {
    id: 15,
    title: 'Honda Dream Yuga',
    price: 1750000,
    status: 'available',
    created_at: '2025-05-25T03:13:10Z',
    category: {
      id: 3,
      category_name: 'Honda',
      created_at: '2025-05-24T12:20:00Z',
      created_by: 103,
    },
    motocycleImage: {
      id: 115,
      image: honda4,
      is_primary: true,
      uploaded_at: '2025-05-25T03:13:10Z',
      moto: 15,
    },
  },
  {
    id: 16,
    title: 'Yamaha FZ',
    price: 1950000,
    status: 'available',
    created_at: '2025-05-25T03:13:15Z',
    category: {
      id: 4,
      category_name: 'Yamaha',
      created_at: '2025-05-24T12:30:00Z',
      created_by: 104,
    },
    motocycleImage: {
      id: 116,
      image: yamaha5,
      is_primary: true,
      uploaded_at: '2025-05-25T03:13:15Z',
      moto: 16,
    },
  },
];
