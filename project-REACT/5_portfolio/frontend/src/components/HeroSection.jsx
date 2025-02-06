import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const isMobile = window.innerWidth < 768;
    const speedFactor = isMobile ? 0.5 : 1;

    function initParticles() {
      particles.length = 0; 
      for (let i = 0; i < 200; i++) {
        let hue = Math.random() * 60 + 180; 
        let saturation = Math.random() * 20 + 10; 
        let lightness = Math.random() * 30 + 10; 

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          speedX: (Math.random() * 4 - 2) * speedFactor,
          speedY: (Math.random() * 4 - 2) * speedFactor,
          color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        });
      }
    }

    function animateParticles() {
      ctx.fillStyle = "black"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      }

      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      });
    };
  }, []);

  return (
    <>
      <div
        id="home"
        className="hero-section w-[100%] sm:h-[87vh] mt-[93px] scroll-mt-[93px] relative bg-black"
      >
        {/* Animated Background */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>

        <div className="main-container sm:w-[90%] w-[95%] sm:h-[100%] mx-auto relative z-10">
          {/* -----content-area-start-here----- */}
          <div className="content-area sm:w-[100%] sm:h-[100%] sm:flex sm:justify-between">
            {/* -----content-left-start-here----- */}
            <div className="info sm:w-[50%] sm:pt-36 pt-10">
              <p className="candidate-name pb-4 text-white sm:text-2xl text-lg font-semibold">
                Hi there, I'm Amandeep Singh
              </p>
              <p className="candidate-title pb-2 text-5xl text-white font-bold">
                Crafting Intuitive
              </p>
              <p className="candidate-title pb-10 text-5xl text-blue-500 font-bold">
                Digital Experiences
              </p>
              <p className="candidate-description text-lg sm:text-left text-justify text-white font-semibold">
                I specialize in building scalable and efficient web applications
                using the MERN stack, helping individuals and brands achieve their
                goals through user-focused digital solutions and interactive
                experiences.
              </p>

              <div className="button-group sm:w-[52%] mt-10 sm:flex sm:justify-between">
                <div className="download-cv-div rounded-lg sm:py-0 py-3">
                  <button
                    type="button"
                    className="w-full px-10 py-3 text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-center dark:hover:bg-blue-700"
                  >
                    Download CV
                  </button>
                </div>
                <div className="hire-me-div">
                  <a href="#contact">
                    <button
                      type="button"
                      className="w-full px-10 py-3 text-lg font-medium text-black bg-white hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none rounded-lg text-center"
                    >
                      Hire Me
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* -----content-left-end-here----- */}

            {/* -----content-right-start-here----- */}
            <div className="info-image sm:w-[45%] sm:py-0 py-10 sm:flex sm:justify-center sm:items-center">
              <div className="image-div">
                <img src="/images/profile_7.png" alt="Profile" />
              </div>
            </div>
            {/* -----content-right-end-here----- */}
          </div>
          {/* -----content-area-end-here----- */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
