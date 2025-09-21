
import React, { useState, useEffect, useRef } from 'react';
import { ScanIcon, ErrorIcon, BarcodeScannerIcon } from './icons';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';
import BarcodeScannerModal from './BarcodeScannerModal';

interface ProductSearchProps {
  onAddItem: (productId: string, quantity: number) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // For debounced search
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [quantity, setQuantity] = useState(1);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce the user input to avoid excessive searching
  useEffect(() => {
    const handler = setTimeout(() => {
        if (inputValue && !error) {
            setSearchTerm(inputValue);
        } else {
            setSearchTerm('');
        }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, error]);
  
  // Perform search when debounced term changes
  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredSuggestions = MOCK_PRODUCTS.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.id.includes(searchTerm)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
    setHighlightedIndex(-1); // Reset highlight on new search
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setSuggestions([]);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const validationRegex = /^[a-zA-Z0-9\s]*$/;
    if (!validationRegex.test(value)) {
        setError('Only letters, numbers, and spaces are allowed.');
        setSuggestions([]);
        return;
    }

    setError(null);

    const scannedProduct = MOCK_PRODUCTS.find(p => p.id === value.trim());
    if (scannedProduct) {
        handleSuggestionClick(scannedProduct.id);
        return;
    }
  };
  
  const handleSuggestionClick = (productId: string) => {
    onAddItem(productId, quantity);
    setInputValue('');
    setSearchTerm('');
    setSuggestions([]);
    setError(null);
    setQuantity(1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (error || suggestions.length === 0) return;

    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            setHighlightedIndex(prev => (prev + 1) % suggestions.length);
            break;
        case 'ArrowUp':
            e.preventDefault();
            setHighlightedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
            break;
        case 'Enter':
            if (highlightedIndex > -1) {
                e.preventDefault(); // Prevent form submission ONLY if we handle it here
                handleSuggestionClick(suggestions[highlightedIndex].id);
            }
            break;
        case 'Escape':
            setSuggestions([]);
            break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (error) return;

    const searchTermSubmit = inputValue.trim();

    if (highlightedIndex > -1 && suggestions[highlightedIndex]) {
        handleSuggestionClick(suggestions[highlightedIndex].id);
        return;
    }

    if (searchTermSubmit) {
      const productFound = MOCK_PRODUCTS.find(p => 
        p.id === searchTermSubmit || p.name.toLowerCase() === searchTermSubmit.toLowerCase()
      );
      
      if (productFound) {
        handleSuggestionClick(productFound.id);
      } else if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0].id);
      } else {
        alert(`Product with ID or Name "${searchTermSubmit}" not found.`);
      }
    }
  };

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <strong key={i}>{part}</strong>
                ) : (
                    part
                )
            )}
        </>
    );
  };
  
  const handleBarcodeScanned = (barcode: string) => {
    setIsScannerOpen(false);
    const productToAdd = MOCK_PRODUCTS.find(p => p.id === barcode.trim());
    if (productToAdd) {
        handleSuggestionClick(productToAdd.id);
    } else {
        setInputValue(barcode);
        setError(`Product with barcode "${barcode}" not found.`);
        setSuggestions([]);
        inputRef.current?.focus();
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md" ref={searchContainerRef}>
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <div className="relative flex-grow">
            <ScanIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-300" />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter Product ID or Name... (Barcode ready)"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition ${
                  error 
                  ? 'border-red-500 ring-red-200' 
                  : 'border-neutral-200 focus:ring-primary-light'
              }`}
              autoComplete="off"
              data-testid="product-id-input"
              aria-invalid={!!error}
              aria-describedby="product-search-error"
              aria-autocomplete="list"
              aria-controls="product-suggestions"
              aria-activedescendant={highlightedIndex > -1 ? `suggestion-${highlightedIndex}` : undefined}
            />
            {suggestions.length > 0 && !error && (
                <ul id="product-suggestions" role="listbox" className="absolute z-10 w-full bg-white border border-neutral-200 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                  {suggestions.map((product, index) => (
                    <li
                      id={`suggestion-${index}`}
                      key={product.id}
                      role="option"
                      aria-selected={index === highlightedIndex}
                      onClick={() => handleSuggestionClick(product.id)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`p-3 cursor-pointer border-b last:border-b-0 ${
                        index === highlightedIndex ? 'bg-secondary' : 'hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-semibold text-primary-dark">{getHighlightedText(product.name, searchTerm)}</div>
                      <div className="text-sm text-neutral-700">ID: {getHighlightedText(product.id, searchTerm)} - ${product.price.toFixed(2)}</div>
                    </li>
                  ))}
                </ul>
              )}
              {error && (
                  <div id="product-search-error" className="flex items-center gap-2 text-red-600 text-sm mt-2" role="alert">
                      <ErrorIcon className="w-4 h-4" />
                      {error}
                  </div>
              )}
          </div>
          <button
            type="button"
            onClick={() => setIsScannerOpen(true)}
            className="p-3 bg-secondary hover:bg-primary-light text-primary-dark font-bold rounded-lg transition-colors duration-300 flex items-center justify-center"
            aria-label="Scan barcode with camera"
          >
            <BarcodeScannerIcon className="w-6 h-6" />
          </button>
          <div>
            <label htmlFor="quantity-input" className="sr-only">Quantity</label>
            <input
              id="quantity-input"
              type="number"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setQuantity(isNaN(val) || val < 1 ? 1 : val);
              }}
              min="1"
              className="w-20 text-center border rounded-lg py-3 focus:ring-2 focus:outline-none transition border-neutral-200 focus:ring-primary-light"
              aria-label="Quantity"
            />
          </div>
          <button
            type="submit"
            disabled={!!error}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 disabled:bg-neutral-300 disabled:cursor-not-allowed"
          >
            Add Item
          </button>
        </form>
      </div>
      {isScannerOpen && (
        <BarcodeScannerModal
          onClose={() => setIsScannerOpen(false)}
          onScanSuccess={handleBarcodeScanned}
        />
      )}
    </>
  );
};

export default ProductSearch;