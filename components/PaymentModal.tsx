
import React, { useState } from 'react';
import { CardIcon, CashIcon } from './icons';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onCompleteSale: () => void;
}

type PaymentMethod = 'cash' | 'card';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, total, onCompleteSale }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md transform transition-transform scale-100" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Complete Payment</h2>
        <p className="text-neutral-700 mb-6">Select a payment method to finalize the sale.</p>
        
        <div className="bg-primary-dark text-white rounded-lg p-6 mb-6 text-center">
            <p className="text-lg opacity-80">Total Amount Due</p>
            <p className="text-5xl font-bold tracking-tight">${total.toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${paymentMethod === 'card' ? 'border-accent bg-background' : 'border-neutral-200'}`}
            >
                <CardIcon className="w-10 h-10 mb-2 text-primary"/>
                <span className="font-semibold">Card</span>
            </button>
            <button 
                onClick={() => setPaymentMethod('cash')}
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all ${paymentMethod === 'cash' ? 'border-accent bg-background' : 'border-neutral-200'}`}
            >
                <CashIcon className="w-10 h-10 mb-2 text-primary"/>
                <span className="font-semibold">Cash</span>
            </button>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={onClose}
                className="w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-bold py-3 rounded-lg transition-colors"
            >
                Cancel
            </button>
            <button 
                onClick={onCompleteSale}
                className="w-full bg-accent hover:opacity-90 text-primary-dark font-bold py-3 rounded-lg transition-colors"
            >
                Complete Sale
            </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentModal;
