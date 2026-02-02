import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Desenvolvedor de Software Sênior",
        company: "Caixa Consórcio | Remoto",
        period: "Abr/2025 - Jan/2026",
        description: "Desenvolvimento e manutenção de sistemas corporativos em Azure DevOps. Implementação de soluções backend (Node.js, C#) e frontend (React, JQuery) com foco em performance e escalabilidade. Participação no desenvolvimento de plataformas B2B.",
        techs: ["Node.js", "C#", "React", "Azure DevOps", "JQuery"]
    },
    {
        role: "Desenvolvedor de Software",
        company: "Corps Teknologi | Natal, RN",
        period: "Jun/2021 - Abr/2025",
        description: "Desenvolvimento Fullstack de aplicações web e mobile. Criação e manutenção de APIs RESTful e interfaces responsivas. Garantia de performance, escalabilidade e integração entre sistemas.",
        techs: ["Node.js", "React", "Java", "PHP", "React Native", "PostgreSQL", "MySQL"]
    },
    {
        role: "Estágio em Desenvolvimento de Software",
        company: "SESAP-RN | Natal, RN",
        period: "Mar/2021 - Jun/2021",
        description: "Desenvolvimento de APIs e manutenção de banco de dados MySQL. Apoio no desenvolvimento e manutenção dos sistemas internos do órgão.",
        techs: ["MySQL", "APIs REST", "Manutenção de Sistemas"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Experiência Profissional
            </motion.h2>

            <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '2rem' }}>
                {/* Timeline Line */}
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    backgroundColor: 'var(--glass-border)'
                }}></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        style={{ position: 'relative', marginBottom: '4rem' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0.2rem',
                            width: '1.2rem',
                            height: '1.2rem',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-color)',
                            border: '4px solid var(--bg-color)',
                            boxShadow: '0 0 0 1px var(--accent-color)'
                        }}></div>

                        <div className="glass" style={{ padding: '2rem' }}>
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.9rem',
                                color: 'var(--accent-color)',
                                fontWeight: 600,
                                marginBottom: '0.5rem'
                            }}>
                                {exp.period}
                            </span>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 400 }}>{exp.company}</h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {exp.description}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {exp.techs.map((t, i) => (
                                    <span key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--glass-border)' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Experience;
