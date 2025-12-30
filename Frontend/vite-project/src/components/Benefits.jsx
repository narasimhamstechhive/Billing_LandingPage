import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    return (
        <section className="py-24 bg-white" id="benefits" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className={`transition-all duration-800 ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}>
                        <div className="inline-block px-5 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
                            <span>🎯 Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-left">
                            Transform Your Business Operations
                        </h2>

                        <div className="space-y-8 mb-12">
                            {[
                                { icon: '⚡', title: 'Lightning Fast Billing', desc: 'Process transactions in seconds with our optimized checkout flow' },
                                { icon: '💰', title: 'Increase Revenue by 30%', desc: 'Smart insights help you make data-driven decisions to boost sales' },
                                { icon: '⏱️', title: 'Save 10+ Hours Weekly', desc: 'Automate repetitive tasks and focus on growing your business' },
                                { icon: '🛡️', title: 'Zero Data Loss', desc: 'Automatic cloud backups ensure your business data is always safe' }
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-[70px] h-[70px] bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-slate-100">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bg-gradient-to-r from-primary to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg 
                               shadow-lg shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300
                               flex items-center justify-center gap-2"
                            onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>
                            <span>Start Your Free Trial</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    {/* Visual Cards */}
                    <div className={`relative h-[500px] transition-all duration-800 delay-200 ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}>
                        <div className="bg-white p-6 rounded-2xl absolute top-0 left-0 min-w-[280px] shadow-card
                           border border-slate-100 animate-float hover:scale-105 transition-transform">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-slate-500 font-medium">Monthly Revenue</span>
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">₹5,42,000</div>
                            <div className="text-sm font-semibold text-success">↑ 32% from last month</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl absolute top-1/2 right-0 -translate-y-1/2 min-w-[280px] shadow-card
                           border border-slate-100 animate-float [animation-delay:2s] hover:scale-105 transition-transform">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-slate-500 font-medium">Today's Sales</span>
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">₹18,450</div>
                            <div className="text-sm font-semibold text-success">↑ 12% vs yesterday</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl absolute bottom-0 left-1/2 -translate-x-1/2 min-w-[280px] shadow-card
                           border border-slate-100 animate-float [animation-delay:4s] hover:scale-105 transition-transform">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-slate-500 font-medium">Active Customers</span>
                            </div>
                            <div className="text-3xl font-bold gradient-text mb-2">1,247</div>
                            <div className="text-sm font-semibold text-success">↑ 25 new this week</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
