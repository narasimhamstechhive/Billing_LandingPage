import { useState, useEffect } from 'react';
import { businessSolutions, industrySolutions } from '../constants/data';

// SVG Icons for Mega Menu
const NavIcons = {
    // Business Management
    Accounting: (
        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    Invoicing: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    Inventory: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
    POS: (
        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    EInvoice: (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    OCR: (
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),

    // Industry Solutions
    Retail: (
        <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),
    Pharmacy: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    SuperMarket: (
        <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    Restaurant: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    Jewellery: (
        <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    Clothing: (
        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
    MobileShops: (
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM12 5a2 2 0 00-2 2v10a2 2 0 002 2h0a2 2 0 002-2V7a2 2 0 00-2-2h0z" /></svg>
    ),
    Electronics: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM12 5a2 2 0 00-2 2v10a2 2 0 002 2h0a2 2 0 002-2V7a2 2 0 00-2-2h0z" /></svg>
    ),
    Labs: (
        <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
};

const Navbar = ({ onNavigate, onSelectIndustry }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
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

    const handleSolutionClick = (e, solutionName) => {
        e.preventDefault();
        // Set selected industry
        if (onSelectIndustry) {
            onSelectIndustry(solutionName);
        }
        // Redirect to pricing section
        handleNavClick('pricing', 'pricing');
    };

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

                            {/* Solutions Mega Menu Dropdown */}
                            <li className="relative group">
                                <button
                                    className="flex items-center gap-1 text-text-primary font-semibold text-[15px] hover:text-primary transition-colors whitespace-nowrap outline-none py-2"
                                    onClick={() => handleNavClick('pricing')}
                                >
                                    Solutions
                                </button>

                                {/* Dropdown Content - Mega Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:-translate-y-0 w-[600px] lg:w-[800px] max-w-[90vw] z-50">
                                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-8 relative overflow-hidden">

                                        {/* Decorative Background Blob */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

                                        {/* Column 1: Business Management */}
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Business Management Solutions</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {businessSolutions.map((sol) => (
                                                    <a
                                                        key={sol.name}
                                                        href="#pricing"
                                                        onClick={(e) => handleSolutionClick(e, sol.name)}
                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 transition-colors group/item cursor-pointer"
                                                    >
                                                        <div className="bg-gray-50 p-1.5 rounded-md group-hover/item:bg-white transition-colors">
                                                            {NavIcons[sol.iconName]}
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary">{sol.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Column 2: Industry Solution */}
                                        <div className="relative">
                                            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-50"></div>
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 pl-4">Industry Solution</h4>
                                            <div className="grid grid-cols-2 gap-2 pl-4">
                                                {industrySolutions.map((sol) => (
                                                    <a
                                                        key={sol.name}
                                                        href="#pricing"
                                                        onClick={(e) => handleSolutionClick(e, sol.name)}
                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors group/item cursor-pointer"
                                                    >
                                                        <div className="bg-gray-50 p-1.5 rounded-md group-hover/item:bg-white transition-colors">
                                                            {NavIcons[sol.iconName]}
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-600">{sol.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

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
                    <li className="py-2 space-y-4">
                        <div>
                            <div className="font-semibold text-sm text-gray-400 uppercase tracking-wider mb-2">Business Solutions</div>
                            <div className="grid grid-cols-2 gap-3 pl-2">
                                {businessSolutions.map((sol) => (
                                    <div key={sol.name} className="flex items-center gap-2 text-sm text-text-secondary py-1" onClick={() => handleNavClick('pricing')}>
                                        <span className="w-5 h-5">{NavIcons[sol.iconName]}</span> {sol.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-sm text-gray-400 uppercase tracking-wider mb-2">Industry Solutions</div>
                            <div className="grid grid-cols-2 gap-3 pl-2">
                                {industrySolutions.map((sol) => (
                                    <div key={sol.name} className="flex items-center gap-2 text-sm text-text-secondary py-1" onClick={() => handleNavClick('pricing')}>
                                        <span className="w-5 h-5">{NavIcons[sol.iconName]}</span> {sol.name}
                                    </div>
                                ))}
                            </div>
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
