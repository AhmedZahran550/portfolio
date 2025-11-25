// 1. Initialize Animate On Scroll
AOS.init({
  once: false, // Whether animation should happen only once
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
      "Healthcare services platform serving 10,000+ users. Features user management, provider services, and payments. This system acts as a centralized backend for two distinct platforms: a Provider Portal for medical staff and a Consumer Mobile App for patients.",
    tech: ["Node.js", "Nest.js", "PostgreSQL", "Docker"],
    highlights: [
      "85% test coverage",
      "Real-time notifications",
      "Cloud storage",
      "Multi-layer caching",
    ],

    isPrivate: false,
    repos: [
      {
        text: "Core Backend",
        url: "https://github.com/AhmedZahran550/medyour-be",
      },
      {
        text: "Jobs/Workers",
        url: "https://github.com/AhmedZahran550/medyour-jobs",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

    demos: [
      {
        text: "Portal Demo",
        type: "video",
        url: "./assets/videos/medyour.mp4",
      },
    ],
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

    isPrivate: false,
    repos: [
      {
        text: "Core Backend",
        url: "https://github.com/AhmedZahran550/labs",
      },
      {
        text: "firebase-functions",
        url: "https://github.com/AhmedZahran550/labs-firebase-functions",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

    demos: [
      {
        text: "Watch Demo",
        type: "video",
        url: "./assets/videos/labs_for_home.mp4",
      },
    ],
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

    isPrivate: true,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

    demos: [
      {
        text: "Live Demo",
        type: "link",
        url: "https://google.com",
      },
    ],
  },
];

// 4. Modal Logic (Repo & Video)

// -- Repo Modal Logic --
const repoModal = document.getElementById("repo-modal");

function openRepoModal() {
  repoModal.classList.remove("hidden");
  repoModal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeRepoModal() {
  repoModal.classList.add("hidden");
  repoModal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// -- Video Modal Logic --
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("demo-player");

function openVideoModal(videoUrl) {
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
  videoPlayer.src = videoUrl; // Set the video source dynamically
  videoPlayer.play().catch((e) => console.error("Video Error:", e));
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
  videoPlayer.pause(); // Stop video
  videoPlayer.currentTime = 0; // Reset time
  videoPlayer.src = ""; // Clear source
  document.body.style.overflow = "auto";
}

// Close modals on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeRepoModal();
    closeVideoModal();
  }
});

// 5. Render Projects
const projectsContainer = document.getElementById("projects-container");

projectsContainer.innerHTML = projects
  .map((project, index) => {
    // LOGIC 1: GitHub Button(s)
    let githubButtonHTML = "";

    // CASE A: Multiple Repositories (Like Medyour)
    if (project.repos && project.repos.length > 0) {
      githubButtonHTML = project.repos
        .map(
          (repo) => `
            <a href="${repo.url}" target="_blank" class="p-2.5 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all flex items-center gap-2 group/repo" title="${repo.text}">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span class="text-xs font-medium">${repo.text}</span>
            </a>`
        )
        .join("");
    }
    // CASE B: Private Repo
    else if (project.isPrivate) {
      githubButtonHTML = `
                <button onclick="openRepoModal()" class="p-2.5 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all" title="Private Repository">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </button>`;
    }
    // LOGIC 2: Generate Demo Buttons Loop
    let demoButtonsHTML = "";

    if (project.demos && project.demos.length > 0) {
      demoButtonsHTML = project.demos
        .map((demo) => {
          if (demo.type === "video") {
            // Video Button
            return `
                        <button onclick="openVideoModal('${demo.url}')" class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm font-medium text-center transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            ${demo.text}
                        </button>`;
          } else if (demo.type === "link") {
            // Link Button
            return `
                        <a href="${demo.url}" target="_blank" class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm font-medium text-center transition-all shadow-lg hover:shadow-blue-500/25 whitespace-nowrap">
                            ${demo.text}
                        </a>`;
          }
        })
        .join("");
    } else {
      // Placeholder if no demos exist
      demoButtonsHTML = `
                <span class="flex-1 py-2.5 bg-gray-800 text-gray-500 rounded-lg text-sm font-medium text-center cursor-not-allowed border border-gray-700">
                    No Demo
                </span>`;
    }

    return `
        <div class="glass-card rounded-xl group relative overflow-hidden h-full flex flex-col" data-aos="fade-up" data-aos-delay="${
          index * 100
        }">
            
            <div class="absolute inset-0 z-0">
                <img src="${project.image}" alt="${
      project.title
    }" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-30">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60"></div>
            </div>

            <div class="relative z-10 p-6 flex flex-col h-full">
                
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">${
                      project.title
                    }</h3>
                    <div class="p-2 bg-white/10 rounded-full">
                        <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    </div>
                </div>
                
                <p class="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">${
                  project.description
                }</p>
                
                <div class="space-y-4">
                    <div class="flex flex-wrap gap-2">
                        ${project.tech
                          .map(
                            (t) =>
                              `<span class="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-200">${t}</span>`
                          )
                          .join("")}
                    </div>
                    
                    <ul class="space-y-1 border-t border-gray-700/50 pt-4">
                        ${project.highlights
                          .map(
                            (h) =>
                              `<li class="text-xs text-gray-400 flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>${h}</li>`
                          )
                          .join("")}
                    </ul>
                </div>

                <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-700/50">
                    ${demoButtonsHTML}
                    ${githubButtonHTML}
                </div>
            </div>
        </div>
        `;
  })
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
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("active"));
  });
}

// 8. Canvas Particle System
const canvas = document.getElementById("neural-network");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function initParticles() {
  particles = [];
  const particleCount = Math.min(w * 0.1, 100);
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
