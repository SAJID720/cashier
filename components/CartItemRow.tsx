import React from 'react';
import { CartItem } from '../types';
import { PlusIcon, MinusIcon, TrashIcon } from './icons';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <tr className="border-b last:border-none hover:bg-neutral-100 transition-colors">
      <td className="py-3 px-3">
        <p className="font-semibold text-primary-dark">{item.name}</p>
        <p className="text-sm text-neutral-700">ID: {item.id}</p>
        {item.description && <p className="text-xs text-neutral-500 mt-1">{item.description}</p>}
      </td>
      <td className="py-3 px-3">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full bg-neutral-200 hover:bg-secondary transition-colors text-primary-dark"
          >
            <MinusIcon className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-bold">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full bg-neutral-200 hover:bg-secondary transition-colors text-primary-dark"
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
      <td className="py-3 px-3 text-right font-mono">${item.price.toFixed(2)}</td>
      <td className="py-3 px-3 text-right font-mono font-bold">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="py-3 px-3 text-center">
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
          aria-label={`Remove ${item.name}`}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

export default CartItemRow;