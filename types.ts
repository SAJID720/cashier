export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface QuickAddItem {
    id: string;
    label: string;
    icon: JSX.Element;
}

export interface PriceHistoryEntry {
  price: number;
  startDate: string; // ISO date string
}

export interface SaleTotals {
  subtotal: number;
  tax: number;
  total: number;
}

export interface SaleTransaction {
  id: string;
  timestamp: string;
  items: CartItem[];
  totals: SaleTotals;
}