import React from 'react';
import { CartItem as CartItemType } from '../types';
import CartItemRow from './CartItemRow';
import { EmptyCartIcon } from './icons';

interface CartProps {
  items: CartItemType[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
      <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b pb-2">Current Order</h2>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-neutral-300">
            <EmptyCartIcon className="w-24 h-24 mb-4"/>
          <p className="text-lg font-semibold">Cart is empty</p>
          <p className="text-sm">Scan an item to get started</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-sm text-neutral-700">
                <th className="py-2 px-3 font-semibold">Description</th>
                <th className="py-2 px-3 font-semibold text-center">Quantity</th>
                <th className="py-2 px-3 font-semibold text-right">Unit Price</th>
                <th className="py-2 px-3 font-semibold text-right">Total</th>
                <th className="py-2 px-3"></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;