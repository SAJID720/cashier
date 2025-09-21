import React, { useEffect, useRef, useState } from 'react';
import { LoadingIcon, ErrorIcon } from './icons';

interface BarcodeScannerModalProps {
  onClose: () => void;
  onScanSuccess: (barcode: string) => void;
}

// Declare the BarcodeDetector type as it might not be in default TS libs
declare global {
  interface Window {
    BarcodeDetector: any;
  }
  const BarcodeDetector: any;
}

const BarcodeScannerModal: React.FC<BarcodeScannerModalProps> = ({ onClose, onScanSuccess }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let animationFrameId: number | null = null;

    const startScan = async () => {
      if (!('BarcodeDetector' in window)) {
        setError('Barcode detection is not supported in this browser.');
        setIsLoading(false);
        return;
      }
      
      const barcodeDetector = new window.BarcodeDetector({
        formats: ['ean_13', 'upc_a', 'code_128', 'qr_code'],
      });

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(e => {
            console.error("Video play failed:", e);
            setError("Could not start camera feed.");
          });
          setIsLoading(false);
        }

        const detectBarcode = async () => {
          if (videoRef.current && videoRef.current.readyState === 4) { // HAVE_ENOUGH_DATA
            try {
              const barcodes = await barcodeDetector.detect(videoRef.current);
              if (barcodes.length > 0) {
                onScanSuccess(barcodes[0].rawValue);
              }
            } catch (err) {
              // This can happen if the document is hidden, etc.
              console.error('Barcode detection failed:', err);
            }
          }
          if (stream?.active) {
            animationFrameId = requestAnimationFrame(detectBarcode);
          }
        };
        detectBarcode();

      } catch (err) {
        console.error('Error accessing camera:', err);
        setError('Could not access camera. Please grant permission.');
        setIsLoading(false);
      }
    };

    startScan();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onScanSuccess]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl p-4 w-full max-w-lg relative">
        <h2 className="text-xl font-bold text-center text-primary-dark mb-4">Scan Barcode</h2>
        <div className="relative w-full aspect-video bg-neutral-900 rounded-md overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <LoadingIcon className="w-10 h-10 animate-spin mb-2" />
              <p>Starting camera...</p>
            </div>
          )}
          {error && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <ErrorIcon className="w-10 h-10 text-red-500 mb-2" />
              <p>{error}</p>
            </div>
          )}
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${isLoading || error ? 'hidden' : ''}`}
            playsInline
            aria-label="Camera feed for barcode scanning"
          />
          {!isLoading && !error && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4/5 h-1/2 border-4 border-dashed border-white border-opacity-50 rounded-lg" aria-hidden="true"></div>
             </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-bold py-3 rounded-lg transition-colors"
          aria-label="Cancel scanning"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BarcodeScannerModal;
