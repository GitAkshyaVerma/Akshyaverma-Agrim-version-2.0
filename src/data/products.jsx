import React from 'react';
import { Wine, Pill, Candy, Droplets } from 'lucide-react';

export const productsData = [
  {
    id: 'beverages',
    title: 'Alcohol & Beverages',
    desc: 'We believe every great moment deserves an exceptional drink. Our signature Tombo range features premium spirits crafted for a smooth, bold, and refined taste. Using the finest global ingredients and traditional distillation methods, each bottle is rich in character from crisp artisanal vodkas to complex, herb-infused bitters. Whether it’s a casual gathering or a special celebration, our drinks add a touch of global excellence to every pour.',
    shortDesc: 'Your night, our spirit. Unleash the Tombo vibe.',
    icon: <Wine size={48} className="category-icon" />,
    largeIcon: <Wine size={56} color="var(--color-primary)" />,
    link: '/tombo'
  },
  {
    id: 'pharma',
    title: 'Hygiene & Health Care',
    desc: 'We believe everyone deserves to feel safe and comfortable. Our health care range covers everything from extra-soft essentials for newborns to reliable feminine hygiene and daily wellness products. Every item is made following strict global safety rules, combining pure ingredients with designs that actually work. We’re here to give your family the quality and protection they need to feel confident every single day.',
    shortDesc: 'From gentle beginnings to confident living, keeping babies dry and you unstoppable.',
    icon: <Pill size={48} className="category-icon" />,
    largeIcon: <Pill size={56} color="var(--color-primary)" />,
    link: '/maintenance'
  },
  {
    id: 'candies',
    title: 'Confectionery & Candies',
    desc: 'There is nothing quite like the simple joy of a great candy. Our confectionery collection starts with our vibrant lollipops with fruity flavors that kids and adults both love. Beyond our signature pops, we offer a wide variety of delightful treats, including rich, smooth chocolates and chewy, fruity gummies. Every piece is made with high quality, pure ingredients and a whole lot of passion. Our candies are designed to bring a little extra happiness to every moment of your day.',
    shortDesc: 'Quality lollipops for every sweet moment, Tobo Candies Crafted for Smiles.',
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
