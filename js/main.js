// 1. Initialize Animate On Scroll
AOS.init({
  once: true, // Whether animation should happen only once
  offset: 100, // Offset (in px) from the original trigger point
  duration: 800, // Duration of animation
  easing: "ease-out-cubic", // Easing function
});

// 2. Typewriter Effect
const textElement = document.getElementById("typewriter");
const phrases = [
  "Backend Node.js Developer",
  "Nest.js Expert",
  "API Architect",
  "Database Designer",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = 2000; // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500; // Wait before typing next
  }

  setTimeout(typeWriter, typeSpeed);
}
typeWriter();

// 3. Projects Data
const projects = [
  {
    title: "Medyour Healthcare App",
    description:
      "Healthcare services platform serving 10,000+ users. Features user management, provider services, appointment scheduling, and payments.",
    tech: ["Node.js", "Nest.js", "PostgreSQL", "Docker"],
    highlights: [
      "85% test coverage",
      "Real-time notifications",
      "Cloud storage",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Learning Management System",
    description:
      "Full-stack LMS supporting course management, student enrollment, and progress tracking with efficient data retrieval.",
    tech: ["Next.js", "Nest.js", "Redis", "Firebase"],
    highlights: [
      "40% faster response",
      "Role-based access",
      "Multi-layer caching",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Labs for Home Gaming",
    description:
      "Scalable gaming backend handling 500+ concurrent users with real-time game state synchronization.",
    tech: ["Nest.js", "WebSockets", "PostgreSQL", "Redis"],
    highlights: [
      "Real-time multiplayer",
      "In-game transactions",
      "Low latency",
    ],
    demoLink: "#",
    githubLink: "#",
  },
];

// Render Projects with AOS
const projectsContainer = document.getElementById("projects-container");
projectsContainer.innerHTML = projects
  .map(
    (project, index) => `
            <div class="glass-card p-6 rounded-xl group" data-aos="fade-up" data-aos-delay="${
              index * 100
            }">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">${
                      project.title
                    }</h3>
                    <svg class="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                </div>
                <p class="text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px]">${
                  project.description
                }</p>
                
                <div class="space-y-4">
                    <div class="flex flex-wrap gap-2">
                        ${project.tech
                          .map(
                            (t) =>
                              `<span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">${t}</span>`
                          )
                          .join("")}
                    </div>
                    <ul class="space-y-1 border-t border-gray-800 pt-4">
                        ${project.highlights
                          .map(
                            (h) =>
                              `<li class="text-xs text-gray-500 flex items-center gap-2"><span class="w-1 h-1 bg-blue-500 rounded-full"></span>${h}</li>`
                          )
                          .join("")}
                    </ul>
                </div>

                <div class="flex gap-3 mt-6 pt-4">
                    <a href="${
                      project.demoLink
                    }" class="flex-1 py-2 bg-white/5 hover:bg-blue-600 hover:text-white text-gray-300 rounded-lg text-sm font-medium text-center transition-all">Live Demo</a>
                    <a href="${
                      project.githubLink
                    }" class="px-3 py-2 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-white transition-all">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
        `
  )
  .join("");

// 4. Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
    navbar.classList.replace("h-20", "h-16");
  } else {
    navbar.classList.remove("shadow-lg");
    navbar.classList.replace("h-16", "h-20");
  }
});

// 5. Mobile Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("active"));
});

// 6. Canvas Particle System (Tech Nodes)
const canvas = document.getElementById("neural-network");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function initParticles() {
  particles = [];
  const particleCount = Math.min(w * 0.1, 100); // Responsive count
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    });
  }
}

function animateCanvas() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
    ctx.fill();

    // Draw connections
    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - (dist / 150) * 0.8})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateCanvas);
}

window.addEventListener("resize", () => {
  resize();
  initParticles();
});

resize();
initParticles();
animateCanvas();
