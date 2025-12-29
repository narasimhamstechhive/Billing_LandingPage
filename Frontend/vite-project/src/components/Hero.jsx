import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    return (
        <section
            className="pt-32 pb-20 bg-gradient-hero overflow-hidden"
            id="home"
            ref={heroRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className={`text-left transition-all duration-800 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                        }`}>
                        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-red-100/50 shadow-sm animate-fade-in-up">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            #1 Billing Software in India
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.15] mb-6">
                            Simple. Secure. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                                Business Accounting
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-lg font-medium">
                            Manage your business professionally with the easiest GST billing, inventory & accounting software. Trusted by 1 Crore+ businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="bg-gradient-to-r from-primary to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg 
                               shadow-lg shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300
                               flex items-center justify-center gap-2"
                                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                                <span>Get Started Free</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <button className="bg-white text-heading border border-gray-200 px-8 py-4 rounded-xl 
                               font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300
                               flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>
                                <span>Request Demo</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-bold text-heading">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                GST Compliant
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                Made in India
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                Easy Inventory
                            </div>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className={`relative transition-all duration-800 delay-200 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}>
                        <div className="relative z-10 w-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/Dashboard.jpg"
                                alt="BillMaster Dashboard"
                                className="w-full h-auto rounded-xl shadow-2xl border border-gray-200"
                            />

                            {/* Floating Badge 1 */}
                            <div className="absolute -left-4 md:-left-6 top-1/2 bg-white p-3 md:p-4 rounded-xl shadow-float border-l-4 border-accent animate-float hidden sm:block">
                                <div className="text-xs text-text-secondary font-bold uppercase mb-1">Total Sale</div>
                                <div className="text-xl md:text-2xl font-extrabold text-heading">₹ 24,50,000</div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div className="absolute -right-2 md:-right-4 bottom-8 bg-primary text-white p-3 rounded-xl shadow-lg animate-float [animation-delay:2s] hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg text-xl">⭐</div>
                                    <div>
                                        <div className="font-bold text-lg">4.8/5</div>
                                        <div className="text-xs opacity-90">User Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-red-50/50 to-transparent -z-10 blur-3xl rounded-full pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
