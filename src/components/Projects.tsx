import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: "E-commerce High Performance",
        description: "Plataforma de vendas completa com foco em SEO e performance (Lighthouse score 98+). Integração com Stripe para pagamentos e Redis para cache de produtos.",
        tags: ["Next.js", "TypeScript", "Stripe", "Redis", "Tailwind"],
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        title: "SaaS Financeiro",
        description: "Dashboard interativo para gestão financeira empresarial. Recursos de conciliação bancária, gráficos em tempo real e relatórios automatizados.",
        tags: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        title: "Realtime Chat API",
        description: "Sistema de mensageria escalável suportando 10k+ conexões simultâneas. Arquitetura de microsserviços com comunicação via message broker.",
        tags: ["NestJS", "Socket.io", "Docker", "RabbitMQ", "MongoDB"],
        github: "https://github.com",
        demo: "https://example.com"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Projetos em Destaque
            </motion.h2>

            <div className="grid-responsive">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ y: -10 }}
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><FiGithub size={20} /></a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}><FiExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.85rem',
                                    padding: '0.2rem 0.8rem',
                                    borderRadius: '15px',
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    color: 'var(--accent-color)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Projects;
