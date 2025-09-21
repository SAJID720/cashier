import React, { useState } from 'react';

export type FilterType = 'all' | 'today' | 'last7' | 'thisMonth' | 'custom';

export interface DateFilterValue {
  type: FilterType;
  startDate?: string;
  endDate?: string;
}

interface DateFilterProps {
  onFilterChange: (filter: DateFilterValue) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handlePredefinedFilter = (type: FilterType) => {
    setActiveFilter(type);
    onFilterChange({ type });
    setStartDate('');
    setEndDate('');
  };

  const handleApplyCustom = () => {
    if (startDate && endDate) {
        if (new Date(startDate) > new Date(endDate)) {
            alert("Start date cannot be after end date.");
            return;
        }
      setActiveFilter('custom');
      onFilterChange({ type: 'custom', startDate, endDate });
    } else {
        alert("Please select both a start and end date.");
    }
  };

  const filterOptions: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Time' },
    { id: 'today', label: 'Today' },
    { id: 'last7', label: 'Last 7 Days' },
    { id: 'thisMonth', label: 'This Month' },
  ];

  return (
    <div className="bg-neutral-100 p-4 rounded-lg mb-6 flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        {filterOptions.map(option => (
          <button
            key={option.id}
            onClick={() => handlePredefinedFilter(option.id)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              activeFilter === option.id
                ? 'bg-primary text-white shadow'
                : 'bg-white hover:bg-neutral-200 text-neutral-900'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 flex-wrap md:ml-auto">
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none transition text-sm"
          aria-label="Start date"
        />
        <span className="text-neutral-700">-</span>
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none transition text-sm"
          aria-label="End date"
        />
        <button
            onClick={handleApplyCustom}
            className="px-4 py-2 bg-accent hover:opacity-90 text-primary-dark font-bold rounded-lg transition-all text-sm"
        >
            Apply
        </button>
      </div>
    </div>
  );
};

export default DateFilter;