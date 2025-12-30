import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import BookingForm from './BookingForm';

const Pricing = ({ selectedIndustry }) => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    // State for Booking Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const [billingCycle, setBillingCycle] = useState('yearly');

    const pricingData = {
        monthly: {
            basic: '₹ 499',
            premium: '₹ 699',
            duration: '/ month'
        },
        quarterly: {
            basic: '₹ 1,497',
            premium: '₹ 2,097',
            duration: '/ 3 months'
        },
        semiannual: {
            basic: '₹ 2,994',
            premium: '₹ 4,194',
            duration: '/ 6 months'
        },
        yearly: {
            basic: '₹ 5,988',
            premium: '₹ 8,388',
            duration: '/ year'
        }
    };

    const plans = [
        {
            id: 'basic',
            name: 'Basic Plan',
            type: 'Single User',
            features: [
                'Single User Login',
                'Essential Invoicing',
                'Inventory Management',
                'GST Reports',
                'Email Support Only',
                'Monthly Report Export',
                'Auto Backup'
            ],
            popular: false,
            color: 'border-slate-300 ring-1 ring-slate-100 shadow-md'
        },
        {
            id: 'premium',
            name: 'Premium Plan',
            type: 'Multi-User / Enterprise',
            features: [
                'Everything in Basic',
                'Multi-User Access (Per Login Charge)',
                '24/7 Priority Support',
                'Premium UI/UX Experience',
                'Advanced Report Export (Excel/PDF)',
                'Custom Branding & Invoices',
                'API Access & Integration'
            ],
            popular: true,
            color: 'border-primary'
        }
    ];

    const cycles = [
        { id: 'monthly', label: 'Monthly' },
        { id: 'quarterly', label: 'Quarterly' },
        { id: 'semiannual', label: '6 Months' },
        { id: 'yearly', label: 'Yearly' },
    ];

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <section className="py-24 bg-background-soft" id="pricing" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Simple & Transparent <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Choose the perfect plan for your business. No hidden charges.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex bg-white p-1 rounded-xl shadow-md border border-gray-100 mb-8 flex-wrap justify-center">
                        {cycles.map((cycle) => (
                            <button
                                key={cycle.id}
                                onClick={() => setBillingCycle(cycle.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === cycle.id
                                    ? 'bg-primary text-white shadow-md'
                                    : 'text-text-secondary hover:bg-gray-50'
                                    }`}
                            >
                                {cycle.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative px-4 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${plan.color} ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-text-muted font-semibold uppercase tracking-wider mb-6">{plan.type}</p>
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <div className="flex items-end">
                                        <span className="text-4xl font-extrabold text-gray-900">
                                            {pricingData[billingCycle][plan.id]}
                                        </span>
                                        <span className="text-text-secondary mb-1 text-sm font-medium">
                                            {pricingData[billingCycle].duration}
                                        </span>
                                    </div>
                                    {plan.id === 'premium' && (
                                        <span className="text-xs text-primary font-semibold mt-1">* Per User / Login</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 text-left">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm">
                                        <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePlanSelect(plan)}
                                className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-lg ${plan.popular
                                    ? 'bg-primary text-white hover:bg-primary-hover shadow-red-200'
                                    : 'bg-white text-gray-900 border border-gray-200 hover:border-primary hover:text-primary'
                                    }`}>
                                {plan.popular ? 'Get Started' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>



            </div>

            {/* Booking Modal */}
            <BookingForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedPlan={selectedPlan}
            />
        </section>
    );
};

export default Pricing;
