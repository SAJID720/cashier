import React from 'react';
import { Product, QuickAddItem, PriceHistoryEntry } from './types';
import { AppleIcon, BagIcon, BananaIcon, BreadIcon, MilkIcon, WaterIcon } from './components/icons';

export const MOCK_PRODUCTS: Product[] = [
  { id: '101', name: 'Organic Apples', price: 2.99, description: 'Crisp and sweet, perfect for snacking.' },
  { id: '102', name: 'Whole Wheat Bread', price: 3.49, description: 'Freshly baked whole wheat loaf.' },
  { id: '103', name: 'Organic Milk (1 Gallon)', price: 5.99, description: 'Whole milk, pasteurized.' },
  { id: '104', name: 'Free-Range Eggs (Dozen)', price: 4.79, description: 'A dozen large brown eggs.' },
  { id: '105', name: 'Avocado', price: 1.99, description: 'Ripe and ready to eat.' },
  { id: '106', name: 'Bananas (per lb)', price: 0.79, description: 'A healthy source of potassium.' },
  { id: '107', name: 'Chicken Breast (per lb)', price: 6.99, description: 'Boneless, skinless chicken breast.' },
  { id: '108', name: 'Cheddar Cheese Block', price: 4.50, description: 'Sharp cheddar cheese, 8oz block.' },
  { id: '109', name: 'Spring Water (1L)', price: 1.25, description: 'Natural spring water.' },
  { id: '110', name: 'Reusable Shopping Bag', price: 0.99, description: 'Eco-friendly shopping bag.' },
];

export const QUICK_ADD_ITEMS: QuickAddItem[] = [
    // FIX: Replaced JSX syntax with React.createElement to avoid potential JSX compilation issues in a .ts file.
    { id: '101', label: 'Apple', icon: React.createElement(AppleIcon) },
    { id: '106', label: 'Banana', icon: React.createElement(BananaIcon) },
    { id: '102', label: 'Bread', icon: React.createElement(BreadIcon) },
    { id: '103', label: 'Milk', icon: React.createElement(MilkIcon) },
    { id: '109', label: 'Water', icon: React.createElement(WaterIcon) },
    { id: '110', label: 'Bag', icon: React.createElement(BagIcon) },
];

export const PRODUCT_PRICE_HISTORY: Record<string, PriceHistoryEntry[]> = {
  '101': [ // Organic Apples
    { price: 2.79, startDate: '2023-01-15T00:00:00.000Z' },
    { price: 2.89, startDate: '2023-08-01T00:00:00.000Z' },
    { price: 2.99, startDate: '2024-03-10T00:00:00.000Z' },
  ],
  '105': [ // Avocado
    { price: 1.79, startDate: '2023-05-20T00:00:00.000Z' },
    { price: 2.09, startDate: '2023-11-01T00:00:00.000Z' },
    { price: 1.99, startDate: '2024-04-01T00:00:00.000Z' },
  ],
  '107': [ // Chicken Breast (per lb)
    { price: 6.49, startDate: '2023-03-01T00:00:00.000Z' },
    { price: 7.29, startDate: '2023-09-15T00:00:00.000Z' },
    { price: 6.99, startDate: '2024-02-20T00:00:00.000Z' },
  ],
  '102': [ // Whole Wheat Bread
    { price: 3.29, startDate: '2023-02-01T00:00:00.000Z' },
    { price: 3.49, startDate: '2024-01-01T00:00:00.000Z' },
  ]
};