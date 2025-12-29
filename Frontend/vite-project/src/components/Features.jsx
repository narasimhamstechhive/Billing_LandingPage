import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    const features = [
        { title: 'GST Invoicing', desc: 'Create professional GST & non-GST bills that comply with Indian laws.', color: 'bg-blue-50 text-blue-600' },
        { title: 'Inventory Tracking', desc: 'Track stock levels, expiry dates, and batch numbers automatically.', color: 'bg-green-50 text-green-600' },
        { title: 'Payment Reminders', desc: 'Send automatic payment reminders to customers via WhatsApp & SMS.', color: 'bg-purple-50 text-purple-600' },
        { title: 'Business Reports', desc: 'Get 25+ detailed reports like Balance Sheet, P&L, and GST Reports.', color: 'bg-orange-50 text-orange-600' }
    ];

    return (
        <section className="py-24 bg-white" id="features" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Side - Image */}
                    <div className={`lg:w-1/2 w-full relative ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700`}>
                        {/* Removed strict max-width to allow larger image as requested */}
                        <div className="relative mx-auto w-full">
                            <img
                                src="/Restaurantpos.png"
                                alt="BillMaster App Features"
                                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gray-100 hover:scale-105 transition-transform duration-500"
                            />

                            {/* Floating Element */}
                            <div className="absolute bottom-6 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-float hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">₹</div>
                                    <div>
                                        <p className="text-xs text-text-secondary font-bold">Monthly Saving</p>
                                        <p className="text-lg font-extrabold text-green-600">₹ 15,000+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:w-1/2 space-y-8 ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-200`}>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight">
                            Why Small Businesses <br />
                            <span className="text-primary">Love BillMaster?</span>
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Replace your manual register books with a smart, secure, and easy-to-use business app.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-pointer">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 ${feature.color}`}>
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-text-primary mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-primary-hover transition-all hover:translate-x-1 inline-flex items-center gap-2">
                            <span>Explore All Features</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
