import { useState, useEffect } from 'react';
import { submitToGoogleSheets } from '../utils/googleSheetsService';

const EngagementPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mobile, setMobile] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [showSolution, setShowSolution] = useState(true);
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        // Initial timer
        let timer;
        const delay = window.innerWidth < 768 ? 20000 : 10000; // 20s for mobile, 10s for desktop

        if (!hasSubmitted) {
            timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);
        }

        return () => clearTimeout(timer);
    }, [hasSubmitted]);

    useEffect(() => {
        if (!isVisible) return;

        let timeoutId;

        const startCycle = () => {
            setShowQuestion(true);
            setShowSolution(false);

            timeoutId = setTimeout(() => {
                setShowQuestion(false);
                setShowSolution(true);

                setTimeout(() => {
                    setShowSolution(false);
                    setShowQuestion(false); // hide both

                    setTimeout(() => {
                        startCycle(); // repeat after 10s
                    }, 10000);
                }, 1000);
            }, 10000); // Animation duration sync
        };

        startCycle();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        // Re-open after delay if not submitted
        const delay = window.innerWidth < 768 ? 20000 : 10000;

        if (!hasSubmitted) {
            setTimeout(() => {
                setIsVisible(true);
            }, delay);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mobile) return;

        setIsSubmitting(true);
        // Use existing service with specific form type
        await submitToGoogleSheets({ mobile }, 'Lead Popup');

        setIsSubmitting(false);
        setHasSubmitted(true);
        setIsVisible(false);

        // Open Dial Pad
        window.location.href = 'tel:+919032223352';
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Content (Text) */}
                <div className="p-8 md:p-10 w-full md:w-1/2 flex flex-col justify-center text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-2 leading-tight">
                        Still <span className="text-primary">Scrolling?</span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Let Ms Tech Hive Help
                    </h3>

                    <p className="text-gray-600 mb-6 font-medium">
                        Not Sure if we fit your needs? <br />
                        Our Experts are here! Get a free consultation now.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-500 mb-1">Mobile No</label>
                            <input
                                type="tel"
                                required
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter your number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-semibold text-lg"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-lg hover:bg-red-600 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-red-500/30"
                        >
                            {isSubmitting ? 'Connecting...' : 'Talk To Our Expert Now'}
                        </button>
                    </form>
                </div>

                {/* Right Content (Image/Visual) */}
                <div className="hidden md:block w-1/2 bg-gray-50 relative group overflow-hidden">
                    <img
                        src="/thinking-woman.jpg"
                        alt="Expert Consultation"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Animation Container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">

                        {/* 1. Thinking Bubble (Floats up and fades out) */}
                        {showQuestion && (
                            <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl rounded-bl-none shadow-xl mb-32 transform translate-x-12 animate-float opacity-0 animate-fade-in-delayed-1 max-w-[200px]">
                                <p className="text-gray-800 font-bold text-sm leading-snug">
                                    "Which billing software is right for my business?" 🤔
                                </p>
                            </div>
                        )}

                        {/* 2. Solution Reveal (Slides up) */}
                        {showSolution && (
                            <div className="absolute bottom-12 bg-white p-3 rounded-xl shadow-2xl flex items-center gap-3 transform translate-y-full animate-slide-up-delayed w-[75%] border-l-4 border-primary">
                                <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                                <div>
                                    <h4 className="font-extrabold text-heading text-sm leading-tight">Ms Tech Hive</h4>
                                    <p className="text-primary font-bold text-[10px] uppercase tracking-wide">The Right Choice ✅</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngagementPopup;
