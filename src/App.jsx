import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaravel,
  faMicrosoft,
  faReact,
  faGithub,
  faAngular,
  faJava,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "Laravel",
      level: 75,
      color: "danger",
      icon: <FontAwesomeIcon icon={faLaravel} />,
    },
    {
      name: "Angular",
      level: 40,
      color: "danger",
      icon: <FontAwesomeIcon icon={faAngular} />,
    },
    {
      name: "MS Office",
      level: 75,
      color: "primary",
      icon: <FontAwesomeIcon icon={faMicrosoft} />,
    },
    {
      name: "React Native",
      level: 50,
      color: "info",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      name: "Git et Github",
      level: 45,
      color: "warning",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },

    {
      name: "Java (Spring boot)",
      level: 35,
      color: "warning",
      icon: <FontAwesomeIcon icon={faJava} />,
    },
    {
      name: "Node JS",
      level: 30,
      color: "success",
      icon: <FontAwesomeIcon icon={faNodeJs} />,
    },
    {
      name: "Python",
      level: 30,
      color: "success",
      icon: <FontAwesomeIcon icon={faPython} />,
    },
  ];

  const experiences = [
    {
      title: "Développeur Backend",
      company: "EUREKA DESIGN/CONSULTING",
      period: "Juillet - Août 2024",
      description:
        "Stage académique centré sur le développement web . Développement d'une application de gestion des cartes d'accès avec java SE pour desktop et j2e pour le web.",
      tags: ["Java", "java SE", "J2E"],
    },
    {
      title: "Developpeur Fullstack",
      company: "Global Ingenieries Service (GIS)",
      period: "Juillet 2025",
      description:
        "Stage academique centre sur le developpement Backend et frontend pour le compte de site universitaire .",
      tags: ["Laravel", "React", "https://www.estlc.unv-ebolowa.cm/"],
    },
    {
      title: "Developpeur fullstack",
      company: "Institut universitaire de la cote",
      period: "Mai 2025",
      description:
        "Realisation d'une application de gestion de budget personnel",
      tags: ["React native", "Supabase"],
    },
  ];

  const education = [
    {
      degree: "Master EADL",
      school: "Institut Universitaire de la Côte",
      year: "2025 - 2026",
      description: "Expert en Architecture et Développement Logiciel",
      status: "En cours",
      variant: "primary",
    },
    {
      degree: "Cycle Bachelor CSI3/DLW",
      school: "Institut Universitaire de la Côte",
      year: "2024 - 2025",
      description:
        "Conception des Systèmes d'Information / Développement Logiciel et Web",
      status: "Obtenu",
      variant: "success",
    },
    {
      degree: "Baccalauréat D",
      school: "Lycée Polyvalent de Bonabéri",
      year: "2021 - 2022",
      description: "Série scientifique - Diplôme obtenu",
      status: "Obtenu",
      variant: "success",
    },
    {
      degree: "Probatoire D",
      school: "Lycée Polyvalent de Bonabéri",
      year: "2020 - 2021",
      description: "Série scientifique",
      status: "Obtenu",
      variant: "success",
    },
  ];

  const interests = [
    { icon: "⚽", name: "Football" },
    { icon: "🏊", name: "Natation" },
    { icon: "📚", name: "Lecture" },
    { icon: "🎵", name: "Hip-hop" },
    { icon: "🎬", name: "Cinéma" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <style>{`
        body {
          overflow-x: hidden;
        }
        
        .navbar-custom {
          transition: all 0.3s ease;
          background: ${scrolled ? "rgba(255, 255, 255, 0.98)" : "transparent"};
          backdrop-filter: blur(10px);
          box-shadow: ${scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none"};
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .skill-card {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          border-left-color: #667eea;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
        }
        
        .progress-bar-animated {
          animation: progress 1.5s ease-in-out;
        }
        
        @keyframes progress {
          from { width: 0%; }
        }
        
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .avatar-circle {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: bold;
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
          margin: 0 auto 2rem;
        }
        
        .interest-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .interest-card:hover {
          transform: scale(1.05);
        }
        
        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 15px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }
        
        .contact-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }
        
        .social-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px);
          color: white;
        }
        
        .nav-link-custom {
          color: #6c757d !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link-custom:hover {
          color: #667eea !important;
        }
        
        .nav-link-custom.active {
          color: #667eea !important;
        }
        
        .nav-link-custom.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: #667eea;
          border-radius: 2px;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top navbar-custom`}
      >
        <div className="container">
          <a className="navbar-brand gradient-text fw-bold fs-4" href="#home">
            Wulfrid J. MBONGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { id: "home", label: "Accueil" },
                { id: "about", label: "À propos" },
                { id: "skills", label: "Compétences" },
                { id: "experience", label: "Expérience" },
                { id: "education", label: "Formation" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className={`nav-link nav-link-custom ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="avatar-circle">
                <img
                  src="pT.jpg"
                  alt="Avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <h1 className="display-3 fw-bold mb-3 gradient-text">
                Wulfrid Jarle MBONGO BOLLO
              </h1>

              <p className="fs-3 text-secondary mb-2">
                Développeur Full-Stack en devenir
              </p>

              <p className="fs-5 text-muted mb-4">
                Étudiant en Master specialiser à l'Institut Universitaire de la
                Côte
              </p>

              <div className="d-flex gap-3 justify-content-center mb-5">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-lg text-white px-5 py-3 rounded-pill hero-gradient shadow"
                >
                  Me Contacter
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="btn btn-lg btn-outline-primary px-5 py-3 rounded-pill"
                >
                  Voir mes projets
                </button>
              </div>

              <div className="text-center">
                <i
                  className="bi bi-chevron-down fs-1 text-secondary"
                  style={{ cursor: "pointer", animation: "bounce 2s infinite" }}
                  onClick={() => scrollToSection("about")}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="text-center mb-5 section-title gradient-text fw-bold display-5">
            À Propos
          </h2>

          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-4">Profil</h3>
              <p className="text-muted lead">
                Je suis étudiant master 1 EADL (Expert en architecture et
                developpement logiciel) à l'Institut Universitaire de la Côte.
                Passionné par le développement web et mobile, je suis
                actuellement à la recherche d'un stage Professionnel pour mettre
                en pratique et enrichir mes competences en architecture et
                developpement logiciel.
              </p>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-primary fs-5 me-3"></i>
                  <span className="text-muted">Douala, Cameroun</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe text-primary fs-5 me-3"></i>
                  <span className="text-muted">
                    Français (Courant), Anglais (Basique)
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-4">Centres d'intérêt</h3>
              <div className="row g-3">
                {interests.map((interest, index) => (
                  <div key={index} className="col-6">
                    <div className="card interest-card h-100 border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <div className="fs-1 mb-3">{interest.icon}</div>
                        <p className="fw-semibold mb-0">{interest.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="text-center mb-3 section-title gradient-text fw-bold display-5">
            Compétences Techniques
          </h2>
          <p className="text-center text-muted mb-5">
            Technologies que je maîtrise
          </p>

          <div className="row g-4">
            {skills.map((skill, index) => (
              <div key={index} className="col-lg-6">
                <div className="card skill-card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <span className="fs-2">{skill.icon}</span>
                        <h5 className="mb-0 fw-bold">{skill.name}</h5>
                      </div>
                      <span className="badge bg-primary fs-6 px-3 py-2">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className={`progress-bar bg-${skill.color} progress-bar-animated`}
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="text-center mb-3 section-title gradient-text fw-bold display-5">
            Expérience Professionnelle
          </h2>
          <p className="text-center text-muted mb-5">
            Mon parcours extra-académique
          </p>

          <div className="row g-4">
            {experiences.map((exp, index) => (
              <div key={index} className="col-12">
                <div className="card card-hover border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-4">
                    <div className="d-flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle hero-gradient p-3 text-white"
                          style={{
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i className="bi bi-briefcase-fill fs-4"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="h4 fw-bold mb-2">{exp.title}</h3>
                        <p className="text-primary fw-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-muted small mb-3">
                          <i className="bi bi-calendar3 me-2"></i>
                          {exp.period}
                        </p>
                        <p className="text-muted mb-3">{exp.description}</p>
                        <div className="d-flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => {
                            const isUrl =
                              typeof tag === "string" &&
                              (tag.startsWith("http://") ||
                                tag.startsWith("https://"));
                            return isUrl ? (
                              <a
                                key={tagIndex}
                                href={tag}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge bg-light text-primary border border-primary text-decoration-none"
                              >
                                {tag}
                              </a>
                            ) : (
                              <span
                                key={tagIndex}
                                className="badge bg-light text-primary border border-primary"
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="text-center mb-3 section-title gradient-text fw-bold display-5">
            Formation Académique
          </h2>
          <p className="text-center text-muted mb-5">
            Mon parcours scolaire et universitaire
          </p>

          <div className="row g-4">
            {education.map((edu, index) => (
              <div key={index} className="col-12">
                <div className="card card-hover border-0 shadow-sm border-start border-4 border-primary">
                  <div className="card-body p-4">
                    <div className="d-flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className="rounded-circle hero-gradient p-3 text-white"
                          style={{
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i className="bi bi-mortarboard-fill fs-4"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="h4 fw-bold mb-0">{edu.degree}</h3>
                          <span className={`badge bg-${edu.variant} px-3 py-2`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-primary fw-semibold mb-1">
                          {edu.school}
                        </p>
                        <p className="text-muted small mb-2">
                          <i className="bi bi-calendar3 me-2"></i>
                          {edu.year}
                        </p>
                        <p className="text-muted mb-0">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 contact-gradient">
        <div className="container py-5">
          <h2 className="text-center mb-3 fw-bold display-5 text-white">
            Travaillons Ensemble
          </h2>
          <p className="text-center mb-5 fs-5 text-white-50">
            Je suis actuellement à la recherche d'un stage Professionnelle
          </p>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <a
                href="mailto:mbongowilfried02@gmail.com"
                className="text-decoration-none"
              >
                <div className="card contact-card h-100 text-center p-4">
                  <div className="card-body">
                    <i className="bi bi-envelope-fill fs-1 mb-3 d-block text-white"></i>
                    <h5 className="fw-bold mb-2 text-white">Email</h5>
                    <p className="mb-0 text-white-50">
                      mbongowilfried02@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-6">
              <a href="tel:+237656797719" className="text-decoration-none">
                <div className="card contact-card h-100 text-center p-4">
                  <div className="card-body">
                    <i className="bi bi-telephone-fill fs-1 mb-3 d-block text-white"></i>
                    <h5 className="fw-bold mb-2 text-white">Téléphone</h5>
                    <p className="mb-0 text-white-50">+237 656 797 719</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/Logan1xl" className="social-icon">
              <i className="bi bi-github fs-5"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/wilfried-mbongo-251b752a1/"
              className="social-icon"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-1">
            Fait avec <i className="bi bi-heart-fill text-danger"></i> par
            Wulfrid Jarle Mbongo Bollo
          </p>
          <p className="mb-0 text-muted small">© 2025 - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
