import React from 'react';
import { CashRegisterIcon, HistoryIcon, ChartBarIcon } from './icons';

type View = 'cashier' | 'history' | 'accounting';

interface MainNavigationProps {
  currentView: View;
  setView: (view: View) => void;
}

const NavButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  const baseClasses = "flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  const activeClasses = "bg-primary-dark text-white shadow-lg scale-105";
  const inactiveClasses = "bg-white text-neutral-900 hover:bg-neutral-200 hover:shadow";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      {label}
    </button>
  );
};

const MainNavigation: React.FC<MainNavigationProps> = ({ currentView, setView }) => {
  return (
    <div className="bg-neutral-100 p-2 rounded-xl shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <NavButton
                label="Cashier"
                icon={<CashRegisterIcon className="w-6 h-6" />}
                isActive={currentView === 'cashier'}
                onClick={() => setView('cashier')}
            />
            <NavButton
                label="Sales History"
                icon={<HistoryIcon className="w-6 h-6" />}
                isActive={currentView === 'history'}
                onClick={() => setView('history')}
            />
            <NavButton
                label="Accounting"
                icon={<ChartBarIcon className="w-6 h-6" />}
                isActive={currentView === 'accounting'}
                onClick={() => setView('accounting')}
            />
        </div>
    </div>
  );
};

export default MainNavigation;
