import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ThankYouPopup = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Auto-close after 5 seconds if user doesn't close it
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all animate-bounce-in z-50">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                    We have received your request. Our team will contact you shortly to schedule your demo.
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl"
                >
                    Close
                </button>
            </div>
        </div>,
        document.body
    );
};

export default ThankYouPopup;
