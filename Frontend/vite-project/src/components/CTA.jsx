import { useState } from 'react';
import { submitToGoogleSheets } from '../utils/googleSheetsService';
import { isValidEmail, isValidMobile, isValidName } from '../utils/validation';
import { industrySolutions } from '../constants/data';
import ThankYouPopup from './ThankYouPopup';

const CTA = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        businessCategory: '',
        demoDate: '',
        demoTime: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        // Input restrictions
        if (name === 'fullName') {
            newValue = value.replace(/[^a-zA-Z\s]/g, '');
        } else if (name === 'mobile') {
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

        await submitToGoogleSheets(formData, 'Demo Request');

        setIsThankYouOpen(true);
        setFormData({ fullName: '', mobile: '', email: '', businessCategory: '', demoDate: '', demoTime: '' });
        setErrors({});
        setIsSubmitting(false);
    };
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden" id="demo">
            {/* Background Elements */}
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-secondary-light/30 skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="inline-block bg-primary/20 text-primary-light px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-primary/20">
                            🚀 Accelerate Your Growth
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                            Ready to Modernize <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">
                                Your Business?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                            Don't just take our word for it. Schedule a free, personalized demo with our product experts to see how BillMaster fits your specific business needs.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-primary text-xl">🛡️</div>
                                <div>
                                    <h4 className="font-bold text-lg">100% Safe & Secure</h4>
                                    <p className="text-sm text-gray-400">Your pricing and customer data is encrypted.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-primary text-xl">🎧</div>
                                <div>
                                    <h4 className="font-bold text-lg">Premium Support</h4>
                                    <p className="text-sm text-gray-400">Dedicated account manager for your business.</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-hover transform hover:-translate-y-1 transition-all w-full sm:w-auto shadow-red-900/20">
                            Book Your Free Demo
                        </button>
                    </div>

                    {/* Right Content - Form/Visual */}
                    <div className="bg-white text-text-primary p-8 rounded-2xl shadow-2xl relative">
                        <h3 className="text-2xl font-bold mb-2">Request a Callback</h3>
                        <p className="text-text-secondary text-sm mb-6">Fill in your details and we'll call you within 10 minutes.</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-bold text-text-secondary mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Ravi Kumar"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50`}
                                    minLength={2}
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-secondary mb-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-200'} focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50`}
                                    maxLength={10}
                                />
                                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-secondary mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ravikumar@gmail.com"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-secondary mb-1">Business Category</label>
                                <select
                                    name="businessCategory"
                                    value={formData.businessCategory}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50 text-gray-700"
                                >
                                    <option value="">Select your industry...</option>
                                    {industrySolutions.map((ind) => (
                                        <option key={ind.name} value={ind.name}>{ind.name}</option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-text-secondary mb-1">📅 Best Date to Connect</label>
                                    <input
                                        type="date"
                                        name="demoDate"
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        value={formData.demoDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50 text-gray-600 cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-secondary mb-1">⏰ Preferred Time Slot</label>
                                    <select
                                        name="demoTime"
                                        required
                                        value={formData.demoTime}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-DEFAULT focus:ring-2 focus:ring-primary-light outline-none transition-all bg-gray-50 text-gray-600 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Select a time</option>
                                        <option value="09:00 AM">09:00 AM - Morning Start</option>
                                        <option value="09:30 AM">09:30 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="10:30 AM">10:30 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="11:30 AM">11:30 AM</option>
                                        <option value="12:00 PM">12:00 PM - Lunch Break</option>
                                        <option value="12:30 PM">12:30 PM</option>
                                        <option value="01:00 PM">01:00 PM</option>
                                        <option value="01:30 PM">01:30 PM</option>
                                        <option value="02:00 PM">02:00 PM</option>
                                        <option value="02:30 PM">02:30 PM</option>
                                        <option value="03:00 PM">03:00 PM</option>
                                        <option value="03:30 PM">03:30 PM</option>
                                        <option value="04:00 PM">04:00 PM - Afternoon</option>
                                        <option value="04:30 PM">04:30 PM</option>
                                        <option value="05:00 PM">05:00 PM</option>
                                        <option value="05:30 PM">05:30 PM</option>
                                        <option value="06:00 PM">06:00 PM</option>
                                        <option value="06:30 PM">06:30 PM - Late Evening</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className={`w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <ThankYouPopup isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />
        </section>
    );
};

export default CTA;

