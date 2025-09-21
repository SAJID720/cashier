
import React, { useState, useEffect } from 'react';
import { fetchDailyPromotions } from '../services/geminiService';
import { SparklesIcon, LoadingIcon, ErrorIcon } from './icons';

const PromotionsPanel: React.FC = () => {
  const [promotions, setPromotions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPromotions = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const promoData = await fetchDailyPromotions();
        setPromotions(promoData);
      } catch (err) {
        setError('Failed to fetch promotions. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getPromotions();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-neutral-700 py-6">
          <LoadingIcon className="w-8 h-8 animate-spin mb-2" />
          <p>Generating today's deals...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center text-red-600 py-6">
          <ErrorIcon className="w-8 h-8 mb-2" />
          <p>{error}</p>
        </div>
      );
    }

    return (
      <ul className="space-y-3">
        {promotions.map((promo, index) => (
          <li key={index} className="flex items-start gap-3">
            <SparklesIcon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <span className="text-neutral-900">{promo}</span>
          </li>
        ))}
      </ul>
    );
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-neutral-900 mb-4 border-b pb-2">AI-Powered Daily Deals</h2>
      {renderContent()}
    </div>
  );
};

export default PromotionsPanel;
