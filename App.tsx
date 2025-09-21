import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { CartItem, SaleTransaction } from './types';
import { MOCK_PRODUCTS } from './constants';
import { loadState, saveState } from './services/storageService';
import Header from './components/Header';
import PaymentModal from './components/PaymentModal';
import MainNavigation from './components/MainNavigation';
import CashierView from './views/CashierView';
import HistoryView from './views/HistoryView';
import AccountingView from './views/AccountingView';

type View = 'cashier' | 'history' | 'accounting';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => loadState('cartItems', []));
  const [salesHistory, setSalesHistory] = useState<SaleTransaction[]>(() => loadState('salesHistory', []));
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [view, setView] = useState<View>('cashier');

  useEffect(() => {
    saveState('cartItems', cartItems);
  }, [cartItems]);

  useEffect(() => {
    saveState('salesHistory', salesHistory);
  }, [salesHistory]);

  const handleAddItem = useCallback((productId: string, quantity: number) => {
    const productToAdd = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!productToAdd) {
      alert("Product not found!");
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity }];
      }
    });
  }, []);

  const handleUpdateQuantity = useCallback((productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, []);

  const handleRemoveItem = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.08; // 8% tax
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [cartItems]);

  const handleCheckout = useCallback(() => {
    if (cartItems.length > 0) {
      setPaymentModalOpen(true);
    } else {
      alert("Cart is empty!");
    }
  }, [cartItems.length]);

  const handleCompleteSale = useCallback(() => {
    const newTransaction: SaleTransaction = {
      id: `SALE-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      timestamp: new Date().toISOString(),
      items: [...cartItems],
      totals: totals,
    };
    
    setSalesHistory(prevHistory => [newTransaction, ...prevHistory]);
    setPaymentModalOpen(false);
    handleClearCart();
    alert("Sale Completed! Thank you.");
  }, [cartItems, totals, handleClearCart]);

  const renderView = () => {
    switch (view) {
      case 'history':
        return <HistoryView salesHistory={salesHistory} />;
      case 'accounting':
        return <AccountingView salesHistory={salesHistory} />;
      case 'cashier':
      default:
        return (
          <CashierView
            cartItems={cartItems}
            totals={totals}
            onAddItem={handleAddItem}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-6">
        <MainNavigation currentView={view} setView={setView} />
        <div className="mt-6">
          {renderView()}
        </div>
      </main>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        total={totals.total}
        onCompleteSale={handleCompleteSale}
      />
    </div>
  );
};

export default App;