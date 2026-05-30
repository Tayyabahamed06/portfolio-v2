"use client";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, Mail, ExternalLink, ChevronDown, Terminal, Cloud, Code2, Shield, Award } from "lucide-react";

const projects = [
  {
    title: "CI/CD Pipeline",
    desc: "Production-style pipeline that auto-deploys a Next.js app on every GitHub push. Jenkins on EC2, Docker builds, ECR registry, SSH deployment.",
    stack: ["Jenkins", "Docker", "AWS EC2", "ECR", "GitHub Webhooks"],
    github: "https://github.com/Tayyabahamed06/devops-nextjs-app1",
    color: "#3b82f6",
    icon: "⚙️"
  },
  {
    title: "AutoOrganizer",
    desc: "Smart file organizer that watches folders in real time and sorts files by type and actual creation date. Modern dark mode GUI with live activity log.",
    stack: ["Python", "watchdog", "customtkinter", "pathlib", "Click"],
    github: "https://github.com/Tayyabahamed06/AutoOrganizer",
    color: "#10b981",
    icon: "📁"
  },
  {
    title: "GitPulse",
    desc: "Live developer environment dashboard — Git repos health, Docker containers, and Kubernetes pods all in one auto-refreshing terminal view.",
    stack: ["Python", "GitPython", "Docker SDK", "Kubernetes", "Rich"],
    github: "https://github.com/Tayyabahamed06/GitPulse",
    color: "#8b5cf6",
    icon: "📊"
  },
  {
    title: "Terraform IaC on AWS",
    desc: "Complete AWS infrastructure as code — VPC, public/private subnets, EC2, RDS PostgreSQL, S3 with remote state. One command provisions everything.",
    stack: ["Terraform", "AWS VPC", "EC2", "RDS", "S3"],
    github: "https://github.com/Tayyabahamed06/Terraformaws",
    color: "#f59e0b",
    icon: "🏗️"
  },
  {
    title: "Resume Parser API",
    desc: "Serverless API that extracts structured data from PDF resumes — name, email, skills, education, experience. DevSecOps pipeline with bandit, checkov, and OIDC.",
    stack: ["AWS Lambda", "S3", "API Gateway", "PyPDF2", "GitHub Actions"],
    github: "https://github.com/Tayyabahamed06/ResumeParserAPI",
    color: "#ef4444",
    icon: "📄"
  },
  {
    title: "DevDash",
    desc: "Live terminal system monitor — CPU, memory, disk, network, and top processes in one beautiful auto-refreshing dashboard. Runs on any Mac or Linux.",
    stack: ["Python", "psutil", "Rich", "Terminal UI"],
    github: "https://github.com/Tayyabahamed06/DevDash",
    color: "#06b6d4",
    icon: "🖥️"
  }
];

const skills = [
  { category: "Cloud & DevOps", icon: <Cloud size={18}/>, items: ["AWS (EC2, Lambda, S3, RDS, ECR, API GW)", "Docker", "Jenkins", "Terraform", "GitHub Actions", "CI/CD Pipelines"] },
  { category: "Languages", icon: <Code2 size={18}/>, items: ["Python", "TypeScript", "JavaScript", "Java", "Bash/Shell"] },
  { category: "DevSecOps", icon: <Shield size={18}/>, items: ["Bandit", "Checkov", "OIDC", "IAM Least Privilege", "S3 Encryption", "CloudWatch"] },
  { category: "Tools & Frameworks", icon: <Terminal size={18}/>, items: ["Next.js", "React", "Node.js", "Git", "Linux", "PostgreSQL", "MongoDB", "DynamoDB"] },
];

const experience = [
  {
    role: "AWS Cloud Intern",
    company: "F13 Technologies",
    period: "Nov 2025 – Feb 2026",
    points: ["Led a team of 4 to create and deploy company-based AWS projects", "Trained on EC2, S3, IAM, VPC, CloudWatch, and Lambda"]
  },
  {
    role: "Machine Learning Intern",
    company: "Vaishnav Technologies",
    period: "Jun 2025 – Jul 2025",
    points: ["Built Python applications using OOP and modular programming", "EDA on real datasets using Pandas, NumPy, Matplotlib"]
  },
  {
    role: "Head — Quantum Club",
    company: "Kristu Jayanti University",
    period: "Mar 2025 – Present",
    points: ["Leading 150+ members in workshops on emerging technologies", "Mentoring junior students on AWS, Git, and project development"]
  }
];

const certifications = [
  "IELTS Band 7",
  "AWS Academy: Machine Learning Foundations",
  "AWS Partner: Accreditation (Technical)",
  "AWS Partner: Containers on AWS",
  "AWS Partner: Generative AI Essentials",
  "AWS Partner: Cloud Economics",
  "IBM: Getting Started with AI",
  "Infosys: Python Foundation",
];

const stats = [
  { value: "7", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "150+", label: "Club Members Led" },
  { value: "8+", label: "Certifications" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typed, setTyped] = useState("");
  const roles = ["DevOps Engineer", "Cloud Engineer", "SRE Enthusiast", "IaC Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTyped(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex(r => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ background: "#080810", minHeight: "100vh", color: "#e2e8f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Syne', sans-serif; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080810; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 2px; }

        .grad-text {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card {
          border: 1px solid rgba(59,130,246,0.12);
          background: rgba(12,12,22,0.9);
          backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }
        .card:hover {
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 0 40px rgba(59,130,246,0.08), 0 20px 40px rgba(0,0,0,0.4);
          transform: translateY(-3px);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(59,130,246,0.35); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: #94a3b8;
          padding: 13px 32px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.02em;
          border: 1px solid rgba(148,163,184,0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-outline:hover {
          border-color: rgba(99,102,241,0.6);
          color: white;
          background: rgba(99,102,241,0.08);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99,102,241,0.15);
        }

        .nav-blur {
          background: rgba(8,8,16,0.75);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(59,130,246,0.08);
        }

        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(99,102,241,0.2);
          background: rgba(99,102,241,0.06);
          color: #818cf8;
        }

        .grid-line {
          position: absolute;
          background: rgba(59,130,246,0.04);
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: #60a5fa;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .stat-card {
          border: 1px solid rgba(59,130,246,0.1);
          background: rgba(12,12,22,0.6);
          border-radius: 12px;
          padding: 20px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(15,15,28,0.9);
        }

        .section-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .skill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          flex-shrink: 0;
          margin-top: 7px;
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-blur" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="grad-text" style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
            Tayyab Ahamed
          </span>
          <div style={{ display: "flex", gap: 32 }}>
            {["projects", "skills", "experience", "contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)} style={{
                background: "none", border: "none", color: "#64748b",
                fontSize: 14, fontWeight: 500, cursor: "pointer",
                fontFamily: "'Syne', sans-serif", textTransform: "capitalize",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
              >{s}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://github.com/Tayyabahamed06" target="_blank" style={{ color: "#64748b", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            ><GithubIcon size={18}/></a>
            <a href="https://linkedin.com/in/tayyabahamed" target="_blank" style={{ color: "#64748b", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            ><LinkedinIcon size={18}/></a>
            <a href="mailto:tayyabahamed24@gmail.com" style={{ color: "#64748b", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            ><Mail size={18}/></a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Background orbs */}
        <div className="glow-orb" style={{ width: 600, height: 600, background: "#2563eb", top: "10%", left: "-10%" }}/>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "#7c3aed", bottom: "10%", right: "-10%", animationDelay: "2s" }}/>
        <div className="glow-orb" style={{ width: 300, height: 300, background: "#0891b2", top: "40%", left: "50%", animationDelay: "1s" }}/>

        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }}/>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 800 }}>
          {/* Status badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100, border: "1px solid rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.06)", marginBottom: 32 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399", animation: "blink 2s ease-in-out infinite" }}/>
            <span style={{ fontSize: 12, color: "#34d399", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>
            Tayyab{" "}
            <span className="grad-text">Ahamed</span>
          </h1>

          {/* Typewriter */}
          <div style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "#94a3b8", marginBottom: 24, height: 40, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
            <span style={{ color: "#60a5fa" }}>{typed}</span>
            <span className="cursor"/>
          </div>

          {/* Description */}
          <p style={{ fontSize: 17, color: "#64748b", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Final-year BCA student specializing in Cloud Computing. Building production-grade DevOps systems with AWS, Docker, Jenkins, Terraform, and CI/CD. Head of Quantum Club @ Kristu Jayanti University.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <span>View Projects</span>
              <span style={{ fontSize: 18 }}>→</span>
            </button>
            <a className="btn-outline" href="/resume.pdf" download="Tayyab_Ahamed_Resume.pdf">
              <span>Download Resume</span>
              <span style={{ fontSize: 14 }}>↓</span>
            </a>
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            {["AWS", "Docker", "Jenkins", "Terraform", "Python", "CI/CD", "K8s", "Linux"].map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 600, margin: "0 auto" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 4, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.03em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scrollTo("projects")} style={{ position: "absolute", bottom: 32, background: "none", border: "none", color: "#334155", cursor: "pointer", animation: "float 2s ease-in-out infinite" }}>
          <ChevronDown size={24}/>
        </button>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 24px", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#3b82f6", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", marginBottom: 12 }}>WHAT I'VE BUILT</p>
            <h2 className="section-title" style={{ color: "#fff", marginBottom: 16 }}>
              <span className="grad-text">Projects</span>
            </h2>
            <p style={{ color: "#475569", maxWidth: 480, margin: "0 auto" }}>7 projects built before graduating — real DevOps pipelines, cloud infrastructure, and utility tools.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="card" style={{ borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 36 }}>{p.icon}</span>
                  <a href={p.github} target="_blank" style={{ color: "#334155", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
                  ><ExternalLink size={16}/></a>
                </div>
                <div>
                  <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 18, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {p.stack.map((s, j) => (
                    <span key={j} style={{ padding: "4px 10px", fontSize: 11, borderRadius: 6, background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25`, fontFamily: "'JetBrains Mono', monospace" }}>{s}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#334155", textDecoration: "none", transition: "color 0.2s", marginTop: 4 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#334155")}
                >
                  <GithubIcon size={13}/> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#3b82f6", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", marginBottom: 12 }}>TOOLKIT</p>
            <h2 className="section-title grad-text" style={{ marginBottom: 0 }}>Skills</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {skills.map((s, i) => (
              <div key={i} className="card" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#60a5fa", marginBottom: 20 }}>
                  {s.icon}
                  <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>{s.category}</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ color: "#64748b", fontSize: 13, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span className="skill-dot"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 24px", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 12, color: "#3b82f6", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", marginBottom: 12 }}>BACKGROUND</p>
            <h2 className="section-title grad-text" style={{ marginBottom: 0 }}>Experience</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {experience.map((e, i) => (
              <div key={i} className="card" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>{e.role}</h3>
                    <p style={{ color: "#3b82f6", fontSize: 13, marginTop: 2, fontWeight: 500 }}>{e.company}</p>
                  </div>
                  <span style={{ color: "#334155", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", background: "rgba(51,65,85,0.3)", padding: "4px 12px", borderRadius: 6 }}>{e.period}</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {e.points.map((p, j) => (
                    <li key={j} style={{ color: "#475569", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span className="skill-dot" style={{ marginTop: 6 }}/>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 20, marginBottom: 24, display: "flex", alignItems: "center", gap: 10, letterSpacing: "-0.01em" }}>
              <Award size={20} color="#3b82f6"/> Certifications
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {certifications.map((c, i) => (
                <div key={i} className="card" style={{ borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#3b82f6", fontWeight: 700, fontSize: 16 }}>✓</span>
                  <span style={{ color: "#64748b", fontSize: 13 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: 12, color: "#3b82f6", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em", marginBottom: 16 }}>GET IN TOUCH</p>
          <h2 className="section-title" style={{ color: "#fff", marginBottom: 16 }}>
            Let's <span className="grad-text">Connect</span>
          </h2>
          <p style={{ color: "#475569", marginBottom: 40, fontSize: 16, lineHeight: 1.7 }}>
            Open to DevOps, Cloud, and SRE roles. Always up for interesting projects and conversations.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-primary" href="mailto:tayyabahamed24@gmail.com">
              <Mail size={16}/>
              <span>Send Email</span>
            </a>
            <a className="btn-outline" href="https://linkedin.com/in/tayyabahamed" target="_blank">
              <LinkedinIcon size={16}/>
              <span>LinkedIn</span>
            </a>
            <a className="btn-outline" href="https://github.com/Tayyabahamed06" target="_blank">
              <GithubIcon size={16}/>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(30,41,59,0.5)", color: "#1e293b", fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
        Built with Next.js & Tailwind — Tayyab Ahamed © 2026
      </footer>
    </main>
  );
}
