// Scroll-triggered animations
window.addEventListener('scroll', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    const itemPos = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPos < windowHeight - 100) {
      item.classList.add('animate');
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  // Scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  timelineItems.forEach(item => {
      observer.observe(item);
  });
});

// Confetti Animation
function createConfetti() {
  const confettiCanvas = document.getElementById('confetti');
  const confettiContext = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confettiColors = ['#ff6b6b', '#ffd56b', '#6bff95', '#6bafff', '#ff6bfa'];
  const confettiArray = new Array(150).fill().map(() => ({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 1,
      angle: Math.random() * Math.PI * 2,
  }));

  function animateConfetti() {
      confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiArray.forEach(particle => {
          particle.y += particle.speed;
          particle.x += Math.sin(particle.angle) * 2;
          particle.angle += 0.05;

          if (particle.y > confettiCanvas.height) particle.y = 0;
          if (particle.x > confettiCanvas.width) particle.x = 0;

          confettiContext.fillStyle = particle.color;
          confettiContext.fillRect(particle.x, particle.y, particle.size, particle.size);
      });
      requestAnimationFrame(animateConfetti);
  }

  animateConfetti();
}

window.addEventListener('load', createConfetti);


// GSAP Animation Setup
gsap.registerPlugin(ScrollTrigger);

// Header animations
gsap.from("header h1", { duration: 1.5, opacity: 0, y: -50, ease: "bounce" });
gsap.from("header p", { duration: 1.5, opacity: 0, x: 50, delay: 0.5, ease: "power2.inOut" });

// Timeline Item animations with ScrollTrigger
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        ease: "power3.out",
    });
});

// Emoji floating animation
function createFloatingEmoji() {
    const emojiContainer = document.createElement("div");
    emojiContainer.classList.add("floating-emoji");
    emojiContainer.innerHTML = "🎈💖✨";
    document.body.appendChild(emojiContainer);

    gsap.to(emojiContainer, {
        y: -window.innerHeight,
        x: Math.random() * window.innerWidth,
        duration: Math.random() * 4 + 3,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => emojiContainer.remove(),
    });
}

// Generate floating emojis periodically
setInterval(createFloatingEmoji, 1000);

// Confetti Effect
function createConfetti() {
    const confettiContainer = document.getElementById("confetti");

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confetti);
        
        gsap.to(confetti, {
            y: window.innerHeight,
            rotation: Math.random() * 720,
            ease: "power1.in",
            duration: Math.random() * 2 + 3,
            onComplete: () => confetti.remove(),
        });
    }
}

createConfetti();
setInterval(createConfetti, 5000);


// Initialize GSAP animations on scroll for timeline items
gsap.from(".timeline-item.left", {
  scrollTrigger: ".timeline-item.left",
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".timeline-item.right", {
  scrollTrigger: ".timeline-item.right",
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// Confetti effect
const canvas = document.getElementById("confetti-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const confettiArray = [];

// Function to create confetti particles
function createConfetti() {
  for (let i = 0; i < 300; i++) {
      confettiArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          w: Math.random() * 10 + 5,
          h: Math.random() * 10 + 5,
          dx: (Math.random() - 0.5) * 4,
          dy: Math.random() * 3 + 1,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`
      });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiArray.forEach(c => {
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, c.w, c.h);
      c.x += c.dx;
      c.y += c.dy;
      if (c.y > canvas.height) c.y = 0;
      if (c.x > canvas.width) c.x = 0;
  });
}
// /////////////
createConfetti();
setInterval(drawConfetti, 20);


gsap.to(".left-to-right", {
  xPercent: -100,
  ease: "linear",
  repeat: -1,
  duration: 20
});

gsap.to(".right-to-left", {
  xPercent: 100,
  ease: "linear",
  repeat: -1,
  duration: 25
});



// ///////////////////////////////////

// Initialize GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Parallax effect for content sections
gsap.utils.toArray(".scroll-row").forEach((row, i) => {
    gsap.fromTo(
        row,
        { y: i % 2 === 0 ? 50 : -50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Scroll-triggered animations for alternate scrolling images
gsap.to(".left-to-right", {
    xPercent: -100,
    ease: "linear",
    repeat: -1,
    duration: 20
});

gsap.to(".right-to-left", {
    xPercent: 100,
    ease: "linear",
    repeat: -1,
    duration: 25
});




//       /////////////////////


// Floating Animation for Balloons and Hearts
function floatEffect(element, direction) {
  gsap.to(element, {
      y: direction === 'up' ? -20 : 20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
  });
}

// Animate the left and right balloons
floatEffect(".balloon.left", "up");
floatEffect(".balloon.right", "down");

// Animate the left and right hearts
floatEffect(".heart.left", "down");
floatEffect(".heart.right", "up");

// Pulse effect for "Happy Birthday!" text
gsap.to(".happy-birthday", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.6,
  ease: "power1.inOut",
});


// /////////////                

// GSAP hover effect for scaling
const card = document.querySelector("#birthday-card");

card.addEventListener("mouseenter", () => {
    gsap.to("#birthday-card", {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.inOut"
    });

    // Show the card text with an animation
    gsap.fromTo(
        ".card-inner h1",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power1.out" }
    );
    gsap.fromTo(
        ".card-inner p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power1.out" }
    );
});

card.addEventListener("onclick", () => {
    gsap.to("#birthday-card", {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut"
    });
});

