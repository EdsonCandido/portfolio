import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%"
        },
        open: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            }}
        >
            <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
                <a href="#home" className="text-2xl font-bold tracking-tighter" style={{ color: 'white', textDecoration: 'none' }}>
                    Dev<span style={{ color: 'var(--accent-color)' }}>Portfolio</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors"
                            style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--glass-border)', margin: '0 1rem' }}></div>
                    <div className="socials" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://github.com/EdsonCandido" target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></a>
                        <a href="https://linkedin.com/in/edson-caj" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></a>
                        <a href="https://helioslabs.com.br/" target="_blank" rel="noopener noreferrer"><FiGlobe size={20} /></a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        display: 'none' // Will be handled by media query
                    }}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{
                            position: 'fixed',
                            top: '0',
                            right: '0',
                            height: '100vh',
                            width: '100%',
                            maxWidth: '300px',
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '6rem 2rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                            zIndex: 49 // Below header z-index but above content
                        }}
                    >
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.25rem', color: 'white' }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div style={{ marginTop: 'auto', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <a href="https://github.com/EdsonCandido" target="_blank" rel="noopener noreferrer"><FiGithub size={24} /></a>
                            <a href="https://linkedin.com/in/edson-caj" target="_blank" rel="noopener noreferrer"><FiLinkedin size={24} /></a>
                            <a href="https://helioslabs.com.br/" target="_blank" rel="noopener noreferrer"><FiGlobe size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
