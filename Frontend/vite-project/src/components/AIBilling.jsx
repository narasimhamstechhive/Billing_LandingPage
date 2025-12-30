import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AIBilling = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const features = [
        {
            icon: (
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Automatic Item Detection",
            desc: "Products and prices are automatically detected as you type, eliminating manual selection.",
            color: "group-hover:shadow-blue-500/50 from-blue-500/10 to-transparent",
            iconBg: "bg-blue-500/10"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Auto Tax & GST Calculation",
            desc: "GST, CGST, and SGST are automatically applied based on item category and rules.",
            color: "group-hover:shadow-orange-500/50 from-orange-500/10 to-transparent",
            iconBg: "bg-orange-500/10"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: "Automatic Stock Deduction",
            desc: "Inventory is automatically updated the moment a bill is finalized.",
            color: "group-hover:shadow-red-500/50 from-red-500/10 to-transparent",
            iconBg: "bg-red-500/10"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden text-white" id="ai-features">

            {/* Ambient Background Glow - Using Brand Primary/Accent */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl mix-blend-screen animate-pulse-slow delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-red-300 text-sm font-bold mb-6 backdrop-blur-sm">
                        ✨ Next-Gen Technology
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-light to-primary">Power of AI</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Stop doing manual data entry. Let our advanced AI handle the boring stuff while you focus on growing your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-1 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-700 delay-[${index * 200}ms] 
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} hover:-translate-y-2`}
                        >
                            <div className={`bg-secondary-light h-full w-full rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden border border-white/5 transition-all duration-300 shadow-xl ${feature.color}`}>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className={`w-20 h-20 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg border border-white/10 group-hover:border-white/20`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 relative z-10">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Mini */}
                <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-lg hover:shadow-red-500/25 border-2 border-transparent hover:border-primary"
                    >
                        Try AI Billing Demo →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AIBilling;
