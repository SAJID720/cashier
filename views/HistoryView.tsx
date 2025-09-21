import React, { useState, useMemo } from 'react';
import { SaleTransaction } from '../types';
import HistoryItem from '../components/HistoryItem';
import { HistoryIcon, MagnifyingGlassIcon, ExportIcon } from '../components/icons';
import DateFilter, { DateFilterValue } from '../components/DateFilter';

interface HistoryViewProps {
  salesHistory: SaleTransaction[];
}

const HistoryView: React.FC<HistoryViewProps> = ({ salesHistory }) => {
  const [filter, setFilter] = useState<DateFilterValue>({ type: 'all' });

  const filteredSalesHistory = useMemo(() => {
    if (filter.type === 'all') {
      return salesHistory;
    }

    const now = new Date();
    let startDate: Date;
    let endDate: Date = new Date(now);

    switch (filter.type) {
      case 'today':
        startDate = new Date(now);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'last7':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 6);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'thisMonth':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'custom':
        if (!filter.startDate || !filter.endDate) return salesHistory;
        const start = new Date(filter.startDate);
        const end = new Date(filter.endDate);
        startDate = new Date(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate());
        endDate = new Date(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate());
        endDate.setHours(23, 59, 59, 999);
        break;
      default:
        return salesHistory;
    }

    return salesHistory.filter(transaction => {
      const transactionDate = new Date(transaction.timestamp);
      return transactionDate >= startDate && transactionDate <= endDate;
    });

  }, [salesHistory, filter]);

  const handleExportCSV = () => {
    if (filteredSalesHistory.length === 0) {
      alert("There is no data to export.");
      return;
    }

    const header = [
      'Transaction ID',
      'Timestamp',
      'Product Name',
      'Quantity',
      'Unit Price',
      'Total Price'
    ];

    const rows = filteredSalesHistory.flatMap(transaction =>
      transaction.items.map(item => [
        transaction.id,
        new Date(transaction.timestamp).toLocaleString(),
        `"${item.name.replace(/"/g, '""')}"`, // Handle quotes in product names
        item.quantity,
        item.price.toFixed(2),
        (item.price * item.quantity).toFixed(2)
      ].join(','))
    );

    const csvContent = [header.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `sales_history_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (salesHistory.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] text-neutral-300 bg-white rounded-lg shadow-md p-6">
        <HistoryIcon className="w-24 h-24 mb-4 text-primary-light opacity-50 animate-pulse" />
        <h2 className="text-2xl font-bold text-neutral-900">Your Sales History is Empty</h2>
        <p className="text-lg text-neutral-700 mt-2 max-w-md">
          Ready to make your first sale? Head over to the <strong className="text-primary-dark">Cashier</strong> view to get started. Every completed transaction will be recorded here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b pb-3">
        <h2 className="text-2xl font-bold text-neutral-900">Sales Transaction History</h2>
        <button
          onClick={handleExportCSV}
          disabled={filteredSalesHistory.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-sm transition-colors text-sm disabled:bg-neutral-300 disabled:cursor-not-allowed"
        >
          <ExportIcon className="w-5 h-5" />
          Export CSV
        </button>
      </div>
      
      <DateFilter onFilterChange={setFilter} />

      {filteredSalesHistory.length > 0 ? (
        <div className="space-y-3">
          {filteredSalesHistory.map(transaction => (
            <HistoryItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px] text-neutral-300 p-6">
          <MagnifyingGlassIcon className="w-24 h-24 mb-4 text-primary-light opacity-50" />
          <h2 className="text-2xl font-bold text-neutral-900">No Transactions Found</h2>
          <p className="text-lg text-neutral-700 mt-2 max-w-md">
            There are no sales records matching your selected date range. Try adjusting the filter or selecting 'All Time'.
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoryView;
