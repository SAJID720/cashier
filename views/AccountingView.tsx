import React, { useMemo } from 'react';
import { SaleTransaction } from '../types';
import { ChartBarIcon } from '../components/icons';

interface AccountingViewProps {
  salesHistory: SaleTransaction[];
}

interface StatCardProps {
    title: string;
    value: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
        <p className="text-sm font-semibold text-neutral-700">{title}</p>
        <p className="text-4xl font-bold text-primary-dark my-1">{value}</p>
        <p className="text-xs text-neutral-300">{description}</p>
    </div>
);

const AccountingView: React.FC<AccountingViewProps> = ({ salesHistory }) => {

  const stats = useMemo(() => {
    const totalRevenue = salesHistory.reduce((acc, sale) => acc + sale.totals.total, 0);
    const totalTax = salesHistory.reduce((acc, sale) => acc + sale.totals.tax, 0);
    const transactionCount = salesHistory.length;
    const averageSaleValue = transactionCount > 0 ? totalRevenue / transactionCount : 0;

    return { totalRevenue, totalTax, transactionCount, averageSaleValue };
  }, [salesHistory]);

  if (salesHistory.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] text-neutral-300 bg-white rounded-lg shadow-md p-6">
        <ChartBarIcon className="w-24 h-24 mb-4 text-primary-light opacity-50 animate-pulse" />
        <h2 className="text-2xl font-bold text-neutral-900">Your Financial Dashboard Awaits</h2>
        <p className="text-lg text-neutral-700 mt-2 max-w-lg">
          Once you complete a sale, this dashboard will come alive with key metrics like total revenue, taxes collected, and average sale value, providing valuable insights into your business performance.
        </p>
      </div>
    );
  }

  return (
     <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-b pb-3">Accounting Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
                title="Total Revenue"
                value={`$${stats.totalRevenue.toFixed(2)}`}
                description="Total amount from all completed sales"
            />
            <StatCard 
                title="Total Tax Collected"
                value={`$${stats.totalTax.toFixed(2)}`}
                description="Total tax from all completed sales"
            />
            <StatCard 
                title="Number of Transactions"
                value={stats.transactionCount.toString()}
                description="Total number of individual sales"
            />
            <StatCard 
                title="Average Sale Value"
                value={`$${stats.averageSaleValue.toFixed(2)}`}
                description="Average revenue per transaction"
            />
        </div>
     </div>
  );
};

export default AccountingView;