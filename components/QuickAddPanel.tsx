
import React from 'react';
import { QuickAddItem } from '../types';

interface QuickAddPanelProps {
  items: QuickAddItem[];
  onAddItem: (productId: string) => void;
}

const QuickAddPanel: React.FC<QuickAddPanelProps> = ({ items, onAddItem }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b pb-2">Quick Add</h2>
      <div className="grid grid-cols-3 gap-3">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => onAddItem(item.id)}
            className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-secondary hover:border-primary-light transition-colors duration-200 aspect-square text-primary-dark"
          >
            <div className="w-8 h-8 mb-1">{item.icon}</div>
            <span className="text-sm font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAddPanel;
