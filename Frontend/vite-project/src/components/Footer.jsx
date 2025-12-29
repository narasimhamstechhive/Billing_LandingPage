const Footer = ({ onNavigate }) => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-secondary text-white pt-24 pb-12 border-t border-secondary-light/20 mt-1" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 text-2xl font-bold mb-6">
                            <img src="/logo.jpg" alt="Ms Tech Hive" className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-heading text-white">
                                Ms Tech Hive
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                            Empowering businesses with next-gen billing and POS solutions.
                            Simple, secure, and smart.
                        </p>
                        <div className="flex gap-4">
                            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-secondary-light/30 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                    aria-label={social}
                                >
                                    <span className="text-xs">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {['Retail POS', 'Restaurant Billing', 'Supermarket', 'Pharmacy', 'Distribution'].map((item) => (
                                <li key={item}>
                                    <a
                                        onClick={() => {
                                            if (onNavigate) {
                                                onNavigate('pricing');
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                        className="text-gray-400 text-sm cursor-pointer hover:text-primary hover:pl-2 
                                        transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Features', 'Pricing', 'About Us', 'Contact', 'Support'].map((item) => (
                                <li key={item}>
                                    <a
                                        onClick={() => {
                                            if (!onNavigate) return;

                                            const pageMap = {
                                                'Home': 'home',
                                                'Features': 'home', // Ideally prompts scroll after nav
                                                'Pricing': 'pricing',
                                                'About Us': 'about',
                                                'Contact': 'home',// Contact is in footer, visible on all pages, but usually implies home or current
                                                "Support": "support"
                                            };

                                            const targetPage = pageMap[item];
                                            if (targetPage) {
                                                onNavigate(targetPage);
                                                window.scrollTo(0, 0); // Reset scroll

                                                // Handle specific section scrolls if needed (simple version)
                                                if (item === 'Features') {
                                                    setTimeout(() => scrollToSection('features'), 100);
                                                }
                                                if (item === 'Contact') {
                                                    setTimeout(() => scrollToSection('contact'), 100);
                                                }
                                            }
                                        }}
                                        className="text-gray-400 text-sm cursor-pointer hover:text-primary hover:pl-2 
                                        transition-all duration-300 inline-block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">📍</span>
                                <span>Ms Tech Hive <br />Near Gurukul Vidyapeeth, CMR Palli, Kadapa, Andhra Pradesh 516001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">📧</span>
                                <a href="mailto:support@mstechhive.com" className="hover:text-white transition-colors">
                                    info@mstechhive.com

                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">📞</span>
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                                    +91 9032223352
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-secondary-light/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {currentYear} Ms Tech Hive. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
