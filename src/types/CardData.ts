// data/cardData.ts

export interface CardDataType {
  icon: string;
  title: string;
  value: string;
  category: string;
  image: string;
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

// Data ya Kadi (Motorcycles)
export const cardData: CardDataType[] = [
  {
    icon: 'MdTwoWheeler',
    title: 'Pikipiki',
    value: '120+',
    category: 'Boxer',
    image: boxer1,
  },
  {
    icon: 'MdGroup',
    title: 'Watumiaji',
    value: '50+',
    category: 'Tvs',
    image: tvs,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Honda',
    image: honda1,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Yamaha',
    image: yamaha1,
  },
  {
    icon: 'MdTwoWheeler',
    title: 'Pikipiki',
    value: '120+',
    category: 'Boxer',
    image: boxer2,
  },
  {
    icon: 'MdGroup',
    title: 'Watumiaji',
    value: '50+',
    category: 'Tvs',
    image: tvs2,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Honda',
    image: honda2,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Yamaha',
    image: yamaha2,
  },
  {
    icon: 'MdTwoWheeler',
    title: 'Pikipiki',
    value: '120+',
    category: 'Boxer',
    image: boxer3,
  },
  {
    icon: 'MdGroup',
    title: 'Watumiaji',
    value: '50+',
    category: 'Tvs',
    image: tvs3,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Honda',
    image: honda3,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Yamaha',
    image: yamaha3,
  },
  {
    icon: 'MdTwoWheeler',
    title: 'Pikipiki',
    value: '120+',
    category: 'Boxer',
    image: boxer4,
  },
  {
    icon: 'MdGroup',
    title: 'Watumiaji',
    value: '50+',
    category: 'Tvs',
    image: tvs4,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Honda',
    image: honda4,
  },
  {
    icon: 'MdShoppingCart',
    title: 'Agizo',
    value: '75',
    category: 'Yamaha',
    image: yamaha5,
  },
];
