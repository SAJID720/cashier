import React, { useState } from 'react';
import { SaleTransaction, PriceHistoryEntry } from '../types';
import { ChevronDownIcon, ChevronUpIcon, HistoryIcon } from './icons';
import { PRODUCT_PRICE_HISTORY } from '../constants';

interface HistoryItemProps {
  transaction: SaleTransaction;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ transaction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const transactionDate = new Date(transaction.timestamp);

  const toggleProductHistory = (productId: string) => {
    setExpandedProducts(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="font-semibold text-primary-dark">
                ID: <span className="font-mono text-sm">{transaction.id}</span>
            </div>
            <div className="text-sm text-neutral-700">
                {transactionDate.toLocaleDateString()} - {transactionDate.toLocaleTimeString()}
            </div>
        </div>
        <div className="flex items-center gap-4">
            <span className="font-bold text-lg font-mono text-neutral-900">${transaction.totals.total.toFixed(2)}</span>
            {isExpanded ? <ChevronUpIcon className="w-6 h-6 text-neutral-700" /> : <ChevronDownIcon className="w-6 h-6 text-neutral-700" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-4 bg-white">
          <h4 className="font-bold mb-2">Order Details:</h4>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-2 font-semibold">Product</th>
                <th className="py-2 px-2 font-semibold text-center">Qty</th>
                <th className="py-2 px-2 font-semibold text-right">Unit Price</th>
                <th className="py-2 px-2 font-semibold text-right">Item Total Price</th>
              </tr>
            </thead>
            <tbody>
              {transaction.items.map(item => {
                const history: PriceHistoryEntry[] = (PRODUCT_PRICE_HISTORY[item.id] || []).sort(
                  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
                );
                const isHistoryVisible = !!expandedProducts[item.id];

                const activePriceEntry = history.find(entry => new Date(entry.startDate) <= transactionDate);

                return (
                  <React.Fragment key={item.id}>
                    <tr className="border-b last:border-none">
                      <td className="py-2 px-2 align-top">
                        <p>{item.name}</p>
                        {history.length > 1 && (
                            <button
                                onClick={() => toggleProductHistory(item.id)}
                                className="text-xs text-primary hover:underline mt-1 flex items-center gap-1"
                                aria-expanded={isHistoryVisible}
                            >
                                <HistoryIcon className="w-3 h-3" />
                                {isHistoryVisible ? 'Hide' : 'Show'} Price History
                            </button>
                        )}
                      </td>
                      <td className="py-2 px-2 text-center font-mono align-top">{item.quantity}</td>
                      <td className="py-2 px-2 text-right font-mono align-top">${item.price.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right font-mono font-bold align-top">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                    {isHistoryVisible && history.length > 1 && (
                        <tr className="bg-white">
                            <td colSpan={4} className="p-3 border-b">
                                <div className="bg-neutral-100 p-3 rounded-md">
                                    <h5 className="font-semibold text-sm mb-2 text-primary-dark">Price History for {item.name}</h5>
                                    <ul className="text-xs space-y-1">
                                    {history.map((entry, index) => (
                                        <li 
                                            key={index}
                                            className={`flex justify-between p-1.5 rounded-md ${activePriceEntry?.startDate === entry.startDate ? 'bg-secondary font-bold text-primary-dark' : 'text-neutral-700'}`}
                                        >
                                            <span>Effective: {new Date(entry.startDate).toLocaleDateString()}</span>
                                            <span>
                                                ${entry.price.toFixed(2)}
                                                {activePriceEntry?.startDate === entry.startDate && ' (Price at sale)'}
                                            </span>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    )}
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
          <div className="mt-4 text-right space-y-1 text-sm">
             <p>Subtotal: <span className="font-mono">${transaction.totals.subtotal.toFixed(2)}</span></p>
             <p>Tax: <span className="font-mono">${transaction.totals.tax.toFixed(2)}</span></p>
             <p className="font-bold text-base">Total: <span className="font-mono">${transaction.totals.total.toFixed(2)}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryItem;