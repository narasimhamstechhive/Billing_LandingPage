import { useState, useEffect } from 'react';
import { submitToGoogleSheets } from '../utils/googleSheetsService';
import { isValidEmail, isValidMobile, isValidName } from '../utils/validation';
import { industrySolutions } from '../constants/data';

const BookingForm = ({ isOpen, onClose, selectedPlan, initialIndustry }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        businessCategory: initialIndustry || ''
    });
    const [errors, setErrors] = useState({});

    // Update business category if passed prop changes
    useEffect(() => {
        if (initialIndustry) {
            setFormData(prev => ({ ...prev, businessCategory: initialIndustry }));
        }
    }, [initialIndustry, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        // Input restrictions
        if (name === 'fullName') {
            // Only allow letters and spaces
            newValue = value.replace(/[^a-zA-Z\s]/g, '');
        } else if (name === 'mobile') {
            // Only allow numbers
            newValue = value.replace(/\D/g, '');
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!isValidName(formData.fullName)) {
            newErrors.fullName = 'Please enter a valid name (at least 2 letters)';
        }
        if (!isValidMobile(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }
        if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Submit to Google Sheets
        const result = await submitToGoogleSheets(
            { ...formData, selectedPlan: selectedPlan?.name },
            'Plan Booking'
        );

        console.log('Submission result:', result);

        setIsSubmitting(false);
        // We close even if "failed" in this context as it's a no-cors request usually
        alert(`Thank you! We have received your booking request for ${selectedPlan.name}. We will contact you shortly.`);
        onClose();
        setFormData({
            fullName: '',
            mobile: '',
            email: '',
            businessName: ''
        });
        setErrors({});
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 opacity-100 animate-fade-in-up">
                {/* Header */}
                <div className="bg-primary p-6 text-white text-center relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h3 className="text-2xl font-bold mb-1">Get Started</h3>
                    <p className="text-primary-light text-sm">
                        You chose the <span className="font-bold text-white">{selectedPlan?.name}</span>
                    </p>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50`}
                                placeholder="Ramesh Kumar"
                                minLength={2}
                            />
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50`}
                                placeholder="+91 98765 43210"
                                maxLength={10}
                            />
                            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50`}
                                placeholder="ravikumar@gmail.com"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Category</label>
                            <select
                                name="businessCategory"
                                value={formData.businessCategory}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50"
                            >
                                <option value="">Select your industry...</option>
                                {industrySolutions.map((ind) => (
                                    <option key={ind.name} value={ind.name}>{ind.name}</option>
                                ))}
                                <option value="Other">Other</option>
                            </select>
                        </div>



                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Processing...' : 'Proceed to Checkout'}
                        </button>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            Your information is safe with us. We hate spam too.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;

