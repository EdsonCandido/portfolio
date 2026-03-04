import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "3rem 0",
        textAlign: "center",
        marginTop: "4rem",
        borderTop: "1px solid var(--glass-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <a
            href="https://github.com/EdsonCandido"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)" }}
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/edson-caj"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)" }}
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:edson.c.a.j@hotmail.com"
            style={{ color: "var(--text-secondary)" }}
          >
            <FiMail size={24} />
          </a>
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Edson Candido. Todos os direitos
          reservados.
        </p>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.8rem",
            marginTop: "0.5rem",
          }}
        >
          Desenvolvido com React e Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
