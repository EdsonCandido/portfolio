import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiPostgresql, SiOpenjdk, SiPhp } from 'react-icons/si'

const skills = [
  {
    name: 'React',
    icon: <FaReact size={28} color="#61DAFB" />,
    color: 'bg-[#E6F6FB] text-[#087EA4]'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={28} color="#000" />,
    color: 'bg-[#F3F3F3] text-[#000]'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={28} color="#3178C6" />,
    color: 'bg-[#EAF4FD] text-[#3178C6]'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={28} color="#3C873A" />,
    color: 'bg-[#E8F5E9] text-[#3C873A]'
  },
  {
    name: 'Python',
    icon: <FaPython size={28} color="#3776AB" />,
    color: 'bg-[#EAF1FB] text-[#3776AB]'
  },
  {
    name: 'Java',
    icon: <SiOpenjdk size={28} color="#E76F00" />,
    color: 'bg-[#FFF4E6] text-[#E76F00]'
  },
  {
    name: 'PHP',
    icon: <SiPhp size={28} color="#777BB4" />,
    color: 'bg-[#F4F1FA] text-[#777BB4]'
  },
  {
    name: 'SQL',
    icon: <FaDatabase size={28} color="#6366F1" />,
    color: 'bg-[#EEF2FF] text-[#6366F1]'
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql size={28} color="#336791" />,
    color: 'bg-[#E9F0F7] text-[#336791]'
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={28} color="#F05032" />,
    color: 'bg-[#FFF3ED] text-[#F05032]'
  },
  {
    name: 'Docker',
    icon: <FaDocker size={28} color="#2496ED" />,
    color: 'bg-[#E6F4FA] text-[#2496ED]'
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 pt-32">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="profile.jpg"
                alt="Edson Cândido"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Edson Cândido
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8">
              Desenvolvedor Full Stack
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/EdsonCandido"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all border border-black font-semibold shadow"
              >
                <FaGithub size={22} /> GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/edson-caj"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all border border-[#0A66C2] font-semibold shadow"
              >
                <FaLinkedin size={22} /> LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-accent py-20 rounded-xl mx-2 md:mx-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sobre Mim</h2>
            <div className="max-w-3xl mx-auto text-lg text-muted">
              <p className="mb-4">
                Sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras
                e eficientes. Com experiência em diversas tecnologias modernas, busco
                sempre entregar código limpo e de alta qualidade.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all border border-accent text-text ${skill.color}`}
                >
                  <span>{skill.icon}</span>
                  <p className="font-semibold text-base mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-accent py-20 rounded-xl mx-2 md:mx-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Projetos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-primary">Vamos Conectar</h2>
            <p className="text-lg text-muted mb-8">
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>
            <Link
              href="mailto:seu-email@exemplo.com"
              className="px-8 py-4 bg-[#2563eb] text-white rounded-lg hover:bg-[#1e40af] transition-all border border-[#2563eb] font-semibold shadow inline-block"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
