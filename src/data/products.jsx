import React from 'react';
import { Wine, Pill, Candy, Droplets } from 'lucide-react';

export const productsData = [
  {
    id: 'beverages',
    title: 'Beverages',
    desc: 'Tombo offers bold alcoholic beverages and ready-to-drink options designed for modern consumers, bringing quality, flavour, and memorable taste experiences to social moments, celebrations, and relaxation.',
    shortDesc: 'Your night, our spirit. Unleash the Tombo vibe.',
    icon: <Wine size={48} className="category-icon" />,
    largeIcon: <Wine size={56} color="var(--color-primary)" />,
    link: '/tombo'
  },
  {
    id: 'pharma',
    title: 'Health Care',
    desc: 'We offers trusted baby care, feminine hygiene, and protection products designed to deliver comfort, absorbency, safety, and everyday confidence for babies, women, and families.',
    shortDesc: 'Trusted care products designed for comfort, protection, hygiene',
    icon: <Pill size={48} className="category-icon" />,
    largeIcon: <Pill size={56} color="var(--color-primary)" />,
    link: '/maintenance'
  },
  {
    id: 'candies',
    title: 'Confectionery',
    desc: 'Tobo offers colourful candies, lollipops, bubble gums, and sweet treats designed to bring fun, flavour, and happiness to children, teenagers, families, and everyday retail moments.',
    shortDesc: 'Fun, flavourful treats crafted to bring smiles in every bite.',
    icon: <Candy size={48} className="category-icon" />,
    largeIcon: <Candy size={56} color="var(--color-primary)" />,
    link: '/maintenance'
  },
  {
    id: 'sauces',
    title: 'Tomatoes Pastes',
    desc: 'Topisto offers flavourful tomato mixes and cooking blends designed for Nigerian meals, helping households, caterers, and food operators prepare richer, consistent, and convenient everyday dishes.',
    shortDesc: 'Rich tomato blends crafted for bold, flavourful African cooking.',
    icon: <Droplets size={48} className="category-icon" />,
    largeIcon: <Droplets size={56} color="var(--color-primary)" />,
    link: '/topisto'
  }
]
