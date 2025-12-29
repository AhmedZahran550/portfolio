// Configuration
const CONFIG = {
  typewriter: {
    phrases: [
      "Backend Node.js Developer",
      "Nest.js Expert",
      "API Architect",
      "Database Designer",
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseBeforeDelete: 2000,
    pauseBeforeType: 500,
  },
  particles: {
    maxCount: 80,
    areaPerParticle: 15000,
    connectionDistance: 150,
  },
  aos: {
    once: false,
    offset: 100,
    duration: 800,
    easing: "ease-out-cubic",
  },
};

// 1. Initialize Animate On Scroll
AOS.init(CONFIG.aos);

// 2. Typewriter Effect
const textElement = document.getElementById("typewriter");
const phrases = CONFIG.typewriter.phrases;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = CONFIG.typewriter.typingSpeed;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = CONFIG.typewriter.deletingSpeed;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = CONFIG.typewriter.typingSpeed;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typeSpeed = CONFIG.typewriter.pauseBeforeDelete;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = CONFIG.typewriter.pauseBeforeType;
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
    detailUrl: "medyour.html",
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
    detailUrl: "siminds.html",
  },
  {
    title: "Siminds Cloud Functions",
    description:
      "Hybrid cloud architecture leveraging Firebase Gen 2 Cloud Functions and PostgreSQL for Siminds Virtual Labs. Handles high concurrency and real-time events.",
    tech: ["Firebase", "GCP", "PostgreSQL", "TypeScript"],
    highlights: [
      "Gen 2 Cloud Functions",
      "1000+ Concurrent Requests",
      "Hybrid Architecture",
      "Event-Driven",
    ],
    isPrivate: true,
    repos: [],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    demos: [],
    detailUrl: "siminds-functions.html",
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
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  // Wait for next frame to clear source to prevent warnings
  setTimeout(() => {
    videoPlayer.src = "";
  }, 100);
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
    // View Details Button
    const detailButtonHTML = `
        <a href="${project.detailUrl}" class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs md:text-sm font-medium text-center transition-all shadow-lg hover:shadow-blue-500/25 whitespace-nowrap">
            View Details
        </a>
    `;

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

                <div class="flex gap-2 mt-6 pt-4 border-t border-gray-700/50">
                    ${detailButtonHTML}
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
    navbar.classList.remove("h-20");
    navbar.classList.add("h-16");
  } else {
    navbar.classList.remove("shadow-lg");
    navbar.classList.remove("h-16");
    navbar.classList.add("h-20");
  }
});

// 5. Mobile Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    const isExpanded = mobileMenu.classList.toggle("active");
    mobileBtn.setAttribute("aria-expanded", isExpanded);
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// 6. Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
    } else {
      backToTopBtn.classList.add("opacity-0", "invisible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 7. Active Navigation Highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  threshold: 0.3,
  rootMargin: "-80px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// 8. Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 300);
  }
});

// 9. Canvas Particle System
try {
  const canvas = document.getElementById("neural-network");
  if (!canvas) throw new Error("Canvas element not found");

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not supported");

  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = [];
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return; // Skip animation for accessibility
    }

    // Better formula: considers screen area
    const particleCount = Math.min(
      Math.floor((w * h) / CONFIG.particles.areaPerParticle),
      CONFIG.particles.maxCount
    );

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

        if (dist < CONFIG.particles.connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${
            1 - (dist / CONFIG.particles.connectionDistance) * 0.8
          })`;
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
} catch (error) {
  console.error("Canvas initialization failed:", error);
  // Fallback: hide canvas container
  const canvasContainer = document.getElementById("canvas-container");
  if (canvasContainer) canvasContainer.remove();
}
