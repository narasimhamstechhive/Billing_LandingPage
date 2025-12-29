import { useState, useEffect } from 'react';

// SVG Icons for Navbar Solutions
const NavIcons = {
    Mobile: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    Clothing: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
    Restaurant: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    SuperMarket: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    Electronics: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
    ),
    Pharmacy: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
};

const Navbar = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (page, sectionId) => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    };

    const solutions = [
        { name: 'Mobile', icon: NavIcons.Mobile },
        { name: 'Clothing/Fashions', icon: NavIcons.Clothing },
        { name: 'Restaurant', icon: NavIcons.Restaurant },
        { name: 'SuperMarket', icon: NavIcons.SuperMarket },
        { name: 'Electronics', icon: NavIcons.Electronics },
        { name: 'Pharmacy', icon: NavIcons.Pharmacy },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'border-b border-gray-100 py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleNavClick('home', 'home')}
                    >
                        <img src="/logo.jpg" alt="Ms Tech Hive" className="w-10 h-10 rounded-lg shadow-lg object-cover" />
                        <div className="flex flex-col">
                            <span className="font-heading text-xl font-bold text-text-primary leading-none">
                                Ms Tech Hive
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                                Billing System
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-6">
                        <ul className="flex items-center gap-6">
                            <li>
                                <a
                                    href="#features"
                                    onClick={(e) => { e.preventDefault(); handleNavClick('home', 'features'); }}
                                    className="text-text-primary font-semibold text-[15px] hover:text-primary transition-colors cursor-pointer"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
                                    className="text-text-primary font-semibold text-[15px] hover:text-primary transition-colors cursor-pointer"
                                >
                                    Pricing
                                </a>
                            </li>

                            {/* Solutions Dropdown */}
                            <li className="relative group">
                                <button
                                    className="flex items-center gap-1 text-text-primary font-semibold text-[15px] hover:text-primary transition-colors whitespace-nowrap outline-none"
                                    onClick={() => handleNavClick('pricing')}
                                >
                                    Solutions
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Content */}
                                <div className="absolute top-full -left-10 mt-4 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:-translate-y-2 p-4 z-50">
                                    <div className="absolute -top-2 left-12 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Industry Solutions</h4>
                                    <div className="grid grid-cols-1 gap-1">
                                        {solutions.map((sol) => (
                                            <a
                                                key={sol.name}
                                                href="#pricing"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick('pricing');
                                                }}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group/item"
                                            >
                                                <span className="text-gray-500 group-hover/item:text-primary transition-colors">{sol.icon}</span>
                                                <span className="text-sm font-medium text-text-primary group-hover/item:text-primary">{sol.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                                    className="text-text-primary font-semibold text-[15px] hover:text-primary transition-colors cursor-pointer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#support"
                                    onClick={(e) => { e.preventDefault(); handleNavClick('support'); }}
                                    className="text-text-primary font-semibold text-[15px] hover:text-primary transition-colors cursor-pointer"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => handleNavClick('home', 'demo')}
                                className="bg-primary text-white px-6 py-2.5 rounded-md font-bold text-[15px] 
                         hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden text-text-primary p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`xl:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl transition-all duration-300 overflow-y-auto max-h-[80vh] ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                }`}>
                <ul className="p-4 space-y-2">
                    <li>
                        <a href="#features" onClick={() => handleNavClick('home', 'features')} className="block text-text-primary font-semibold text-lg py-2">Features</a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={() => handleNavClick('pricing')} className="block text-text-primary font-semibold text-lg py-2">Pricing</a>
                    </li>

                    {/* Mobile Solutions */}
                    <li className="py-2">
                        <div className="font-semibold text-lg text-primary mb-2">Solutions</div>
                        <div className="grid grid-cols-2 gap-2 pl-4">
                            {solutions.map((sol) => (
                                <div key={sol.name} className="flex items-center gap-2 text-sm text-text-secondary py-1" onClick={() => handleNavClick('pricing')}>
                                    <span className="w-4 h-4">{sol.icon}</span> {sol.name}
                                </div>
                            ))}
                        </div>
                    </li>

                    <li>
                        <a href="#support" onClick={() => handleNavClick('support')} className="block text-text-primary font-semibold text-lg py-2">Support</a>
                    </li>

                    <li className="pt-4 border-t border-gray-100 mt-2">
                        <button
                            onClick={() => handleNavClick('home', 'demo')}
                            className="w-full bg-primary text-white py-3 rounded-md font-bold"
                        >
                            Enquire Now
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
