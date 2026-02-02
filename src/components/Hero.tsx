import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex-center relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(40px)',
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(60px)',
            }}></div>

            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        Portfólio Profissional
                    </span>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #94a3b8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Edson Cândido Alves Júnior<br />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.5em' }}>Desenvolvedor Full Stack • Natal - RN</span>
                    </h1>

                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        FullStack developer looking for challenges. Especialista em construir soluções escaláveis e arquiteturas de alta performance com Java, Spring Boot, Node.js e React.
                    </p>

                    <div className="flex-center" style={{ gap: '1.5rem' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                padding: '0.8rem 2rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)'
                            }}
                        >
                            Ver Projetos
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                backgroundColor: 'transparent',
                                border: '1px solid var(--glass-border)',
                                color: 'white',
                                padding: '0.8rem 2rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            Entrar em Contato
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}
            >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>SCROLL</span>
            </motion.div>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
          40% {transform: translateX(-50%) translateY(-10px);}
          60% {transform: translateX(-50%) translateY(-5px);}
        }
      `}</style>
        </section>
    );
};

export default Hero;
