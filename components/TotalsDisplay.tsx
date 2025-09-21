
import React from 'react';

interface TotalsDisplayProps {
  subtotal: number;
  tax: number;
  total: number;
  onCheckout: () => void;
}

const TotalsDisplay: React.FC<TotalsDisplayProps> = ({ subtotal, tax, total, onCheckout }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center text-neutral-700">
          <span>Subtotal</span>
          <span className="font-mono">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-neutral-700">
          <span>Tax (8%)</span>
          <span className="font-mono">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t my-2"></div>
        <div className="flex justify-between items-center text-2xl font-bold text-primary-dark">
          <span>Total</span>
          <span className="font-mono">${total.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full bg-accent hover:opacity-90 text-primary-dark font-bold text-lg py-3 rounded-lg transition-all duration-300 disabled:bg-neutral-300 disabled:cursor-not-allowed"
        disabled={total <= 0}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default TotalsDisplay;
