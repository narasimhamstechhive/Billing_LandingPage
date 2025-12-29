import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1, once: true });

    const stats = [
        { label: 'Active Users', value: '1 Crore+' },
        { label: 'Industries Served', value: '50+' },
        { label: 'Happy Clients', value: '50 Lakh+' },
        { label: 'Cities Covered', value: '5000+' },
    ];

    const solutions = [
        {
            title: 'Retail Experince',
            description: 'Comprehensive POS and inventory management for supermarkets, clothing stores, and electronics.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            )
        },
        {
            title: 'Restaurant & F&B',
            description: 'Streamlined KOT, table management, and billing for restaurants, cafes, and cloud kitchens.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            title: 'Pharmacy & Health',
            description: 'Expiry management, batch tracking, and salt composition search for pharmacies.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: 'Distribution',
            description: 'Advanced supply chain visibility, route management, and order processing for distributors.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
            )
        }
    ];

    return (
        <section className="bg-white min-h-screen font-sans" id="about-us" ref={sectionRef}>
            {/* Premium Hero Section */}
            <div className="relative bg-secondary text-white py-32 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Glass Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold tracking-wider uppercase mb-6 text-primary-light">
                        About Ms Tech Hive
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-white">
                        Powering Business <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">
                            Growth & Innovation
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        <span className="text-white font-semibold">Ms Tech Hive</span> is a premier technology partner dedicated to transforming traditional businesses into swift, digital enterprises.
                    </p>
                </div>
            </div>

            {/* Our Story Section - Expanded for Ms Tech Hive */}
            <div className={`py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                            Who We Are <br />
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Founded with a vision to democratize access to advanced technology, <span className="font-bold text-secondary">Ms Tech Hive</span> has grown into a trusted ecosystem for businesses across India. We believe that software should solve real-world problems with elegance and efficiency.
                            </p>
                            <p>
                                Is to empower businesses with innovative technology solutions that drive efficiency, growth, and success. We strive to be the leading provider of software solutions that transform the way businesses operate and serve their customers.
                            </p>
                            <div className="pt-6">
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg transition duration-500 group-hover:opacity-30"></div>
                        <div className="bg-white rounded-2xl h-[400px] shadow-2xl relative overflow-hidden border border-gray-100 group-hover:-translate-y-2 transition-transform duration-500">
                            <img
                                src="/Dashboard.jpg"
                                alt="Ms Tech Hive Dashboard Interface"
                                className="w-full h-full object-cover object-left-top transform scale-110 group-hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-8">
                                <div>
                                    <p className="text-white font-bold text-lg">Empowering Growth</p>
                                    <p className="text-gray-300 text-sm">Through intelligent design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: Our Solutions */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Offer</span>
                        <h2 className="text-4xl font-extrabold text-secondary mt-3">Comprehensive Solutions</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            From small retail shops to large distributors, Ms Tech Hive provides tailored software ecosystems to manage every aspect of your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map((sol, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                                    {sol.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{sol.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{sol.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Stats Section */}
            <div className="bg-secondary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center px-4 group hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium uppercase tracking-widest text-xs mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                    <h2 className="text-4xl font-extrabold text-secondary mt-3">The Ms Tech Hive Way</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: 'Customer Obsession',
                            desc: 'Our roadmap is defined by your needs. We listen, adapt, and deliver solutions that solve real pain points.',
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                            )
                        },
                        {
                            title: 'Innovation Lead',
                            desc: 'We constantly push boundaries, integrating the latest in AI and cloud technology to keep your business ahead of the curve.',
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            )
                        },
                        {
                            title: 'Reliability',
                            desc: 'Business never stops, and neither do we. Our systems are built for 99.9% uptime and uncompromised security.',
                            icon: (
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            )
                        }
                    ].map((value, i) => (
                        <div key={i} className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-transform group-hover:scale-150"></div>

                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-600 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
