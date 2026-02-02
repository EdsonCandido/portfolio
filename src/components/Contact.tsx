import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="section-padding container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Entre em Contato
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <p className="text-center" style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    Estou sempre aberto a novas oportunidades e desafios.
                    Se você tem um projeto em mente ou quer apenas dar um oi,
                    envie uma mensagem!
                </p>

                <motion.form
                    className="glass"
                    style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                        const whatsappMessage = `Olá, meu nome é ${name} (${email}). ${message}`;
                        const whatsappUrl = `https://wa.me/5584996459911?text=${encodeURIComponent(whatsappMessage)}`;

                        window.open(whatsappUrl, '_blank');
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Seu nome"
                            style={{
                                padding: '0.8rem',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                outline: 'none',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="seu@email.com"
                            style={{
                                padding: '0.8rem',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                outline: 'none',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Mensagem</label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Sua mensagem..."
                            style={{
                                padding: '0.8rem',
                                borderRadius: '8px',
                                border: '1px solid var(--glass-border)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                outline: 'none',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Enviar Mensagem <FiSend />
                    </motion.button>
                </motion.form>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Ou envie um email direto:</p>
                    <a
                        href="mailto:contact@example.com"
                        className="flex-center"
                        style={{
                            color: 'var(--accent-color)',
                            fontSize: '1.2rem',
                            gap: '0.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        <FiMail /> contact@example.com
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;
