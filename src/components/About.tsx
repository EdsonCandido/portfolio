import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding container">
            <div className="flex-center" style={{ flexDirection: 'column' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Sobre Mim
                </motion.h2>

                <div className="glass" style={{ padding: '3rem', maxWidth: '800px', width: '100%' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-color)' }}>
                            Sou Edson Cândido Alves Júnior, um desenvolvedor Full Stack apaixonado por desafios.
                            Com residência em Natal - RN, busco constantemente evoluir minhas habilidades em arquitetura de software e novas tecnologias.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            Tenho foco em criar soluções que impactam, utilizando Java, Spring Boot, Node.js e React.
                            Valorizo código limpo, performance e a entrega de valor real aos usuários.
                        </p>

                        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Backend</h3>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Node.js & NestJS</li>
                                    <li style={{ marginBottom: '0.5rem' }}>REST & GraphQL RPC</li>
                                    <li>Microservices</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Frontend</h3>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>React & Next.js</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Tailwind & CSS-in-JS</li>
                                    <li>State Management</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Database</h3>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>PostgreSQL & MySQL</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Redis & MongoDB</li>
                                    <li>ORM (Prisma/TypeORM)</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default About;
