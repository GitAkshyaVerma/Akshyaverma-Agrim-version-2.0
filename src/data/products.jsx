import React from 'react';
import { Wine, Pill, Candy, Droplets } from 'lucide-react';

export const productsData = [
  {
    id: 'beverages',
    title: 'Alcohol & Beverages',
    desc: 'Our premium distilled spirits and fine beverages are crafted with tradition and care. We source the finest ingredients globally to ensure every sip delivers an unforgettable experience. Explore our range of award-winning wines, craft beers, and artisanal spirits.',
    shortDesc: 'Premium distilled spirits and fine beverages crafted with tradition and care.',
    icon: <Wine size={48} className="category-icon" />,
    largeIcon: <Wine size={56} color="var(--color-primary)" />,
    link: '#'
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals',
    desc: 'We provide trusted, high quality health essentials and pharmaceutical products. Committed to rigorous safety standards, our pharma division ensures accessible healthcare solutions, from over-the-counter essentials to specialized treatments.',
    shortDesc: 'Trusted, high-quality health essentials and pharmaceutical products.',
    icon: <Pill size={48} className="category-icon" />,
    largeIcon: <Pill size={56} color="var(--color-primary)" />,
    link: '#'
  },
  {
    id: 'candies',
    title: 'Candies & Confectionery',
    desc: 'Delightful sweets and candies made to bring joy to every moment. From rich chocolates to fruity gummies, our confectionery line is created with pure ingredients and passion, perfect for gifting or a sweet personal treat.',
    shortDesc: 'Delightful sweets and candies made to bring joy to every moment.',
    icon: <Candy size={48} className="category-icon" />,
    largeIcon: <Candy size={56} color="var(--color-primary)" />,
    link: '#'
  },
  {
    id: 'sauces',
    title: 'Sauces & Condiments',
    desc: 'Rich, flavorful sauces and condiments to elevate your culinary experience. Whether it is our signature spicy ketchup or our authentic pasta sauces, we bring bold, gourmet flavors directly to your kitchen table.',
    shortDesc: 'Rich, flavorful sauces and condiments to elevate your culinary experience.',
    icon: <Droplets size={48} className="category-icon" />,
    largeIcon: <Droplets size={56} color="var(--color-primary)" />,
    link: '#'
  }
];
