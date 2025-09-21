import React from 'react';
import { CartItem, SaleTotals } from '../types';
import { QUICK_ADD_ITEMS } from '../constants';
import ProductSearch from '../components/ProductSearch';
import Cart from '../components/Cart';
import TotalsDisplay from '../components/TotalsDisplay';
import QuickAddPanel from '../components/QuickAddPanel';
import PromotionsPanel from '../components/PromotionsPanel';

interface CashierViewProps {
  cartItems: CartItem[];
  totals: SaleTotals;
  onAddItem: (productId: string, quantity: number) => void;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

const CashierView: React.FC<CashierViewProps> = ({
  cartItems,
  totals,
  onAddItem,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <ProductSearch onAddItem={onAddItem} />
        <Cart
          items={cartItems}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
        <TotalsDisplay
          subtotal={totals.subtotal}
          tax={totals.tax}
          total={totals.total}
          onCheckout={onCheckout}
        />
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-6">
        <QuickAddPanel items={QUICK_ADD_ITEMS} onAddItem={(productId) => onAddItem(productId, 1)} />
        <PromotionsPanel />
      </div>
    </div>
  );
};

export default CashierView;