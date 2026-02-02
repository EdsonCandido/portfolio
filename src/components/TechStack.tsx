import { motion } from 'framer-motion';
import { SiReact, SiAngular, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiNestjs, SiExpress, SiPostgresql, SiMysql, SiDocker, SiNginx, SiLinux, SiGit, SiSpringboot, SiPhp, SiAmazon, SiOracle } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

const techs = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'OracleDB', icon: SiOracle, color: '#F80000' },
    { name: 'AWS', icon: SiAmazon, color: '#232F3E' },
    { name: 'Azure', icon: VscAzureDevops, color: '#007FFF' },
];

const TechStack = () => {
    return (
        <section id="stack" className="section-padding container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Stack Tecnológica
            </motion.h2>

            <div className="grid-responsive">
                {techs.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="glass flex-center"
                        style={{
                            padding: '2rem',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, borderColor: tech.color }}
                    >
                        <tech.icon size={50} color={tech.color} />
                        <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default TechStack;
