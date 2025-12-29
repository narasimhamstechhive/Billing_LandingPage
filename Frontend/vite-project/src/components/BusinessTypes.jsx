import { useScrollAnimation } from '../hooks/useScrollAnimation';

// SVG Icons for better rendering and premium feel
const Icons = {
    Manufacturer: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    Distributor: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
    ),
    Chemist: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    ),
    Electronics: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    ),
    Hardware: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    Textiles: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    ),
    FMCG: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    Restaurant: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    )
};

const businessTypesData = [
    { icon: 'Manufacturer', title: 'Manufacturer', desc: 'Manage raw materials, production, and billing.' },
    { icon: 'Distributor', title: 'Distributor', desc: 'Bulk order management and party-wise pricing.' },
    { icon: 'Chemist', title: 'Chemist', desc: 'Expiry management and batch number tracking.' },
    { icon: 'Electronics', title: 'Electronics', desc: 'Serial number tracking and warranty management.' },
    { icon: 'Hardware', title: 'Hardware', desc: 'Manage huge inventory with varying units.' },
    { icon: 'Textiles', title: 'Textiles', desc: 'Size, color, and design-wise inventory.' },
    { icon: 'FMCG', title: 'FMCG', desc: 'Fast billing with barcode scanning support.' },
    { icon: 'Restaurant', title: 'Restaurant', desc: 'KOT management and table-wise billing.' },
];

const BusinessTypes = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    return (
        <section className="py-24 bg-background-soft" id="business-types" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-heading mb-4">
                        Built for <span className="text-primary-DEFAULT">Every Business</span>
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Customised features for 50+ business types to manage billing & inventory effortlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {businessTypesData.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-b-4 border-transparent hover:border-primary-DEFAULT cursor-pointer group ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary-DEFAULT mb-4 group-hover:scale-110 transition-transform duration-300">
                                {Icons[item.icon]}
                            </div>
                            <h3 className="font-bold text-lg text-text-primary mb-2 group-hover:text-primary-DEFAULT transition-colors">{item.title}</h3>
                            <p className="text-sm text-text-secondary leading-snug">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="w-full md:w-auto bg-white border-2 border-primary-DEFAULT text-primary-DEFAULT px-6 py-3 rounded-xl font-bold shadow-md md:bg-transparent md:border-0 md:p-0 md:shadow-none hover:bg-red-50 md:hover:bg-transparent md:hover:underline flex items-center justify-center gap-2 mx-auto transition-all">
                        See all Business Types
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BusinessTypes;
