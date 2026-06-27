import profile from "./Profile.jpg";
import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  const typingRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [active, setActive] = useState("home");


  useEffect(() => {
  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
useEffect(() =>{
  if (typingRef.current) {
    const typed = new Typed(typingRef.current, {
      strings: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "React.js Developer",
        "Problem Solver",
        "Building Modren Web Apps"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }
}, []);


  return ( 
    <>
    <nav
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(15,23,42,0.9)",
    backdropFilter: "blur(10px)",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #334155",
  }}
>
  <h3 style={{ color: "#38bdf8", margin: 0 }}>
    Sravani Konne
  </h3>
<div
  style={{
    display: "flex",
    gap: "25px",
    alignItems: "center",
    fontSize: "17px",
    fontWeight: "600",
  }}
>
    <a href="#" style={{ color: "white", 
      textDecoration: "none", 
      transition: "0.3s", 
      padding: "8px 12px", 
      borderRadius:"8px", background: activeSection === "home" ?
       "#38bdf8" : "transparent",}}>Home</a>

    <a href="#about" style={{ color: "white",
       textDecoration: "none", transition: "0.3s",
        padding: "8px 12px",
         borderRadius:"8px", background: activeSection === "about" ? 
         "#38bdf8" : "transparent",}}>About</a>

    <a href="#skills" style={{ color: "white", 
      textDecoration: "none", transition: "0.3s",
      padding: "8px 12px",
       borderRadius:"8px", background: activeSection === "skills" ? 
       "#38bdf8" : "transparent",}}>Skills</a>

    <a href="#projects" style={{ color: "white", 
      textDecoration: "none", 
      transition: "0.3s",
      padding: "8px 12px", 
      borderRadius:"8px", background: activeSection === "projects" ? 
      "#38bdf8" : "transparent",}}>Projects</a>

    <a href="#experience" style={{ color: "white", 
      textDecoration: "none",
       transition: "0.3s",
       padding: "8px 12px", 
       borderRadius:"8px", background: activeSection === "experience" ?
        "#38bdf8" : "transparent",}}>Experience</a>
        
    <a href="#contact" style={{ color: "white",
       textDecoration: "none", 
       transition: "0.3s",
       padding: "8px 12px", 
       borderRadius:"8px", background: activeSection === "contact" ? 
       "#38bdf8" : "transparent",}}>Contact</a>
  </div>
</nav>
<ParticlesBackground />
    <div
  style={{
    position: "relative",
    zIndex: 1,
    background: "rgba(12, 23, 42, 0.85)",
    color: "white",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
    maxWidth: "100%",
    margin: "0 auto",
  }}
>
      <img
  src={profile}
  alt="Sravani"
  style={{
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "5px solid #38bdf8",
  marginBottom: "25px",
  boxShadow: "0 0 35px rgba(56,189,248,0.8)",
  transition: "all 0.4s ease",
}}
/>
      <h1 style={{ fontSize: "50px", color: "white"}}>Hi, I'm Sravani Konne 👋</h1>
      <h2
  style={{
    color: "#38bdf8",
    fontSize: "30px",
    marginTop: "10px",
    minHeight: "40px",
  }}
>
  <span ref={typingRef}></span>
</h2>
   
      <p
  style={{
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: "1.8",
  }}
>
        Frontend Developer passionate about building modern, 
        responsive, and user-friendly web applications using 
        React, JavaScript, HTML, and CSS. Built and deployed 
        real-world projects including Step Lock App and Focus App. 
        Eager to contribute, learn, and grow in a 
        collaborative development team.
      </p>
<div
  style={{
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  }}
>
  <a
    href="https://drive.google.com/file/d/1_UjP1WVr8uQASLy19VdZxcP7X1TKm0hE/view?usp=drive_link"
    target="_blank"
    style={{
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  boxShadow: "0 8px 20px rgba(34,197,94,0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
  >
    📄 Resume
  </a>

  <a
    href="https://github.com/konnesravani07-del"
    target="_blank"
    style={{
  background: "#1f2937",
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/sravani-konne-5922b7231"
    target="_blank"
    style={{
  background: "#0A66C2",
  color: "white",
  padding: "14px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  boxShadow: "0 8px 20px rgba(10,102,194,0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
  >
    🔗 LinkedIn
  </a>
</div>
<p style={{ color: "#cbd5e1", marginTop: "15px" }}>
  Looking for Frontend Developer opportunities where I can contribute, learn and grow.
</p>

      <h2 id="about" style={{ color: "white" }}>👩‍💻 About Me</h2>

<p
  style={{
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.8",
  }}
>
  Frontend Developer skilled in HTML, CSS, JavaScript and React.
Built and deployed projects including Step Lock App and Focus App.
Passionate about creating responsive web applications and continuously learning modern web technologies.
</p>

      <hr />
<h2 id="highlights" style={{ color: "white" }}>🏆 Highlights</h2>

<p>✅ Built and deployed React projects</p>
<p>✅ Skilled in HTML, CSS, JavaScript and React</p>
<p>✅ Active GitHub and Vercel projects</p>
<p>✅ Open to Frontend Developer opportunities</p>

<hr />

<h2 id="summary" style={{ color: "white" }}>💼 Professional Summary</h2>

<p>
Frontend Developer with hands-on experience in building responsive web
applications using HTML, CSS, JavaScript and React. Completed multiple
projects including Step Lock App and Focus App. Strong understanding of
Git/GitHub, responsive design and problem solving. Seeking Frontend
Developer opportunities to contribute and grow in a dynamic team.
</p>

<hr />

      <h2 id="skills" style={{ color: "white" }}>💻 Skills</h2>

      <div
  style={{
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "12px",
  marginTop: "20px",
  maxWidth: "850px",
  marginLeft: "auto",
  marginRight: "auto",
}}
>
  {[
  [
 "🟧 HTML",     "🔵 CSS ",    "🟨 JavaScript",
"⚛️ React",     "⚡ Vite ",   "🌿 Git",
"🐙 GitHub",    "▲ Vercel",    "📱 Responsive Design",
]
].map((skill) => (
    <span
      key={skill}
      style={{
        background: "#1e293b",
        color: "#38bdf8",
        padding: "10px 16px",
        minWidth: "150px",
        textAlign: "center",
        borderRadius: "20px",
        border: "1px solid #38bdf8",
        fontWeight: "bold",
      }}
    >
      {skill}
    </span>
  ))}
</div>

      <hr />
      <h2 id="tools" style={{ color: "white" }}>🛠 Tools & Platforms</h2>
<p>VS Code • GitHub • Vercel • Chrome DevTools</p>

<hr />
     <h2 id="education" style={{ color: "white" }}>🎓 Education</h2>
<p>
Bachelor of Science (B.Sc) - Computer Science
</p>

<p>
Padmavati Women's Degree College
</p>

<p>
CGPA: 8.16 
</p>

<p>Graduated in 2022</p>
<hr />

<h2 id="experience" style={{ color: "white" }}>💼 Experience</h2>

<div
  style={{
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    border: "1px solid #334155",
    maxWidth: "800px",
    margin: "20px auto",
    textAlign: "left",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  }}
>
  <h3 style={{ color: "#38bdf8", marginBottom: "8px" }}>
    System Associate Trainee
  </h3>

  <p style={{ fontWeight: "bold", margin: 0 }}>
    Infosys Ltd
  </p>

  <p style={{ color: "#94a3b8", marginTop: "5px" }}>
    Dec 2024 – Jun 2025
  </p>

  <ul style={{ lineHeight: "1.8" }}>
    <li>Worked in an Agile software development environment.</li>
    <li>Performed SQL queries and Manual Testing.</li>
    <li>Tested REST APIs using industry practices.</li>
    <li>Gained exposure to the Software Development Life Cycle (SDLC).</li>
  </ul>
</div>
<hr />

<h2 id="certifications" style={{ color: "white" }}>🏆 Certifications</h2>
<p style={{ color: "#cbd5e1" }}>
  All certifications are from Infosys Springboard.
</p>

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  }}
>
  {[
    "HTML5",
    "CSS",
    "TypeScript",
    "Java",
    "DBMS (HSQL)",
    "REST API with Spring",
  ].map((cert) => (
    <div
      key={cert}
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px 20px",
        borderRadius: "12px",
        border: "1px solid #38bdf8",
        minWidth: "220px",
        fontWeight: "bold",
      }}
    >
      🏅 {cert}
    </div>
  ))}
</div>

      <h2 id="projects" style={{ color: "white" }}>
  🚀 Projects
</h2>
      <div
  style={{
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "25px",
    border: "1px solid #334155",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(56,189,248,0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
  }}
>
        <h3
  style={{
    color: "#38bdf8",
    fontSize: "28px",
    marginBottom: "10px",
  }}
>
  🚶 Step Lock App
</h3>
        <h2 id="projects" style={{ color: "white" }}>🚀 Live Projects</h2>
        <p>
          Built a React-based productivity app that rewards 
          users with app usage time based on walking activity,
           helping reduce screen addiction.
        </p>
        <p>Tech Stack: React, JavaScript, HTML, CSS</p>
        <p>✅ Key Features:</p>
<ul
  style={{
    display: "inline-block",
    textAlign: "left",
    marginTop: "10px",
  }}
>
  <li>Step-based app unlocking</li>
  <li>Screen time reduction</li>
  <li>Modern responsive UI</li>
  <li>Activity tracking</li>
</ul>
        <p>HTML • CSS • JavaScript • React</p>
       <a
  href="https://my-first-project-e4zg.vercel.app"
  target="_blank"
  style={{
  background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
  color: "white",
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: "12px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  marginRight: "12px",
  boxShadow: "0 6px 15px rgba(14,165,233,0.4)",
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
>
  🚀 Live Demo
</a>

<br/>
<br/>

<a
  href="https://github.com/konnesravani07-del/my-first-project"
  target="_blank"
  style={{
  background: "#111827",
  color: "white",
  padding: "12px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(14,165,233,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 6px 15px rgba(14,165,233,0.4)";
}}
>
  💻 GitHub
</a>

      </div>

      <div
  style={{
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "25px",
    border: "1px solid #334155",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(56,189,248,0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
  }}
>
        <h3
  style={{
    color: "#38bdf8",
    fontSize: "28px",
    marginBottom: "10px",
  }}
>
  🎯 Focus App
</h3>
        <h2 id="projects" style={{ color: "white" }}>🚀 Live Projects</h2>
        <p>
          Built a focus-enhancing web application with timers and 
          productivity tools to help users stay concentrated and reduce distractions.
        </p>
        <p>Tech Stack: HTML, CSS, JavaScript</p>
        <p>✅ Key Features:</p>

<ul
  style={{
    display: "inline-block",
    textAlign: "left",
    marginTop: "10px",
  }}
>
  <li>Focus timer</li>
  <li>Distraction reduction</li>
  <li>Simple productivity dashboard</li>
  <li>Responsive design</li>
</ul>
        <p>HTML • CSS • JavaScript</p>
        <a
  href="https://my-first-project-psi-seven.vercel.app"
  target="_blank"
  style={{
    background: "#38bdf8",
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    textDecoration: "none",
    marginRight: "10px",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
>
  🚀 Live Demo
</a>

<br/>
<br/>

<a
  href="https://github.com/konnesravani07-del/my-first-project"
  target="_blank"
  style={{
  background: "#111827",
  color: "white",
  padding: "12px 24px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
  boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 10px 25px rgba(34,197,94,0.6)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(34,197,94,0.4)";
}}
>
  💻 GitHub
</a>
      </div>

      <hr />
<hr />

<p
  style={{
    color: "#94a3b8",
    marginTop: "20px",
    textAlign: "center",
  }}
>
</p>
      <h2 id="contact" style={{ color: "white", textAlign: "center" }}>
  📞 Contact
</h2>
      <p>Email: konnesravani07@gmail.com</p>
      <p>Phone: +91 7993299039</p>
<p>Location: Telangana, India</p>

<p>
  Resume:
  <a
    href="https://drive.google.com/file/d/1_UjP1WVr8uQASLy19VdZxcP7X1TKm0hE/view?usp=drive_link"
    target="_blank"
  >
    Resume
  </a>
</p>

<p>
  GitHub:
  <a href="https://github.com/konnesravani07-del"target="_blank">
    GitHub Profile
  </a>
</p>

<p>
  LinkedIn:
  <a href="https://www.linkedin.com/in/sravani-konne-5922b7231" target="_blank">
    Linkedin Profile
  </a>
</p>
    </div>
    </>
  );
}

export default App;