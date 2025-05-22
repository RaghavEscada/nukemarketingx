"use client";
import MacbookScrollDemo, { WavyBackgroundDemo } from "@/data/data";
import Link from "next/link";
import { MousePointer } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  // Add script loading for orchestra section
  useEffect(() => {
    // Load required scripts for orchestra section if not already loaded
    const loadScript = (src: string, id: string): HTMLScriptElement | null => {
      if (document.getElementById(id)) return null;
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      document.body.appendChild(script);
      return script;
    };

    // Load required libraries in sequence
    const gsap = loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", "gsap-script");
    if (gsap) {
      gsap.onload = () => {
        const scrollTrigger = loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js", "scrolltrigger-script");
        if (scrollTrigger) {
          scrollTrigger.onload = () => {
            loadScript("https://unpkg.com/lenis@1.1.19/dist/lenis.min.js", "lenis-script");
          };
        }
      };
    }

    // Initialize orchestra animation after scripts are loaded
    const initializeOrchestra = () => {
      // Check if global libraries exist
      if (
        typeof window !== 'undefined' &&
        window.gsap &&
        (window as any).ScrollTrigger &&
        (window as any).Lenis
      ) {
        // Define cubesData object with proper types
        interface CubeData {
          initial: {
            top: number;
            left: number;
            rotateX: number;
            rotateY: number;
            rotateZ: number;
            z: number;
          };
          final: {
            top: number;
            left: number;
            rotateX: number;
            rotateY: number;
            rotateZ: number;
            z: number;
          };
        }

        const cubesData: Record<string, CubeData> = {
          "cube-1": {
            initial: {
              top: -55,
              left: 37.5,
              rotateX: 360,
              rotateY: -360,
              rotateZ: -48,
              z: -30000,
            },
            final: {
              top: 50,
              left: 15,
              rotateX: 0,
              rotateY: 3,
              rotateZ: 0,
              z: 0,
            },
          },
          "cube-2": {
            initial: {
              top: -35,
              left: 32.5,
              rotateX: -360,
              rotateY: 360,
              rotateZ: 90,
              z: -30000,
            },
            final: {
              top: 75,
              left: 25,
              rotateX: 1,
              rotateY: 2,
              rotateZ: 0,
              z: 0,
            },
          },
          "cube-3": {
            initial: {
              top: -65,
              left: 50,
              rotateX: -360,
              rotateY: -360,
              rotateZ: -180,
              z: -30000,
            },
            final: {
              top: 25,
              left: 25,
              rotateX: -1,
              rotateY: 2,
              rotateZ: 0,
              z: 0,
            },
          },
          "cube-4": {
            initial: {
              top: -35,
              left: 50,
              rotateX: -360,
              rotateY: -360,
              rotateZ: -180,
              z: -30000,
            },
            final: {
              top: 75,
              left: 75,
              rotateX: 1,
              rotateY: -2,
              rotateZ: 0,
              z: 0,
            },
          },
          "cube-5": {
            initial: {
              top: -55,
              left: 62.5,
              rotateX: 360,
              rotateY: 360,
              rotateZ: -135,
              z: -30000,
            },
            final: {
              top: 25,
              left: 75,
              rotateX: -1,
              rotateY: -2,
              rotateZ: 0,
              z: 0,
            },
          },
          "cube-6": {
            initial: {
              top: -35,
              left: 67.5,
              rotateX: -180,
              rotateY: -360,
              rotateZ: -180,
              z: -30000,
            },
            final: {
              top: 50,
              left: 85,
              rotateX: 0,
              rotateY: -3,
              rotateZ: 0,
              z: 0,
            },
          },
        };
        // Create smooth scrolling with Lenis
        const lenis = new (window as any).Lenis();

        // Connect Lenis scroll to GSAP's ScrollTrigger
        lenis.on("scroll", (scroll: any) => {
          (window as any).ScrollTrigger.update(scroll);
        });
        // Add ticker for animation frame updates
        window.gsap.ticker.add((time: number) => {
          lenis.raf(time * 1000);
        });

        // Disable lag smoothing for better performance
        window.gsap.ticker.lagSmoothing(0);

        // Get DOM elements with proper type assertions
        const stickySection = document.querySelector(".sticky") as HTMLElement | null;
        const logo = document.querySelector(".logo") as HTMLElement | null;
        const cubesContainer = document.querySelector(".cubes") as HTMLElement | null;
        const header1 = document.querySelector(".header-1") as HTMLElement | null;
        const header2 = document.querySelector(".header-2") as HTMLElement | null;

        // Skip if elements not found
        if (!stickySection || !logo || !cubesContainer || !header1 || !header2) {
          console.warn("Required DOM elements not found");
          return;
        }

        // Add images to cube faces instead of background colors
        const cubeFaces = document.querySelectorAll(".cube > div");
        
        // Define image URLs for each cube face
        // Replace these with actual image paths from your project
        const imageUrls = [
          '/1.png',
          '/2.png',
          '/3.png',
          '/3.png',
          '/2.png',
          '/1.png',
          '/2.png',
          '/3.png',
          '/1.png',
        ];
        
        // Fallback colors if images fail to load
        const fallbackColors = ['#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a', '#5a5a5a', '#6a6a6a'];
        
        cubeFaces.forEach((face, index) => {
          const faceElement = face as HTMLElement;
          
          // Create and append image element
          const img = document.createElement('img');
          img.src = imageUrls[index % imageUrls.length];
          img.alt = `Cube face ${index + 1}`;
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          img.style.position = 'absolute';
          img.style.top = '0';
          img.style.left = '0';
          
          // Add error handler in case image fails to load
          img.onerror = () => {
            faceElement.style.backgroundColor = fallbackColors[index % fallbackColors.length];
            img.style.display = 'none';
          };
          
          faceElement.appendChild(img);
        });

        // Helper function for animation interpolation
        const interpolate = (start: number, end: number, progress: number): number => {
          return start + (end - start) * progress;
        };
        // Create scroll trigger animation
        (window as any).ScrollTrigger.create({
          trigger: stickySection,
          start: "top top",
          end: `+=2000px`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self: any) => {
            // Logo animation
            const initialProgress = Math.min(self.progress * 20, 1);
            logo.style.filter = `blur(${interpolate(0, 20, initialProgress)}px)`;

            const logoOpacityProgress =
              self.progress >= 0.02 ? Math.min((self.progress - 0.02) * 100, 1) : 0;
            logo.style.opacity = String(1 - logoOpacityProgress);

            // Cubes container opacity
            const cubesOpacityProgress =
              self.progress >= 0.01 ? Math.min((self.progress - 0.01) * 100, 1) : 0;
            cubesContainer.style.opacity = String(cubesOpacityProgress);

            // Header 1 animation
            const header1Progress = Math.min(self.progress * 2.5, 1);
            header1.style.transform = `translate(-50%, -50%) scale(${interpolate(
              1,
              1.5,
              header1Progress
            )})`;
            header1.style.filter = `blur(${interpolate(0, 20, header1Progress)}px)`;
            header1.style.opacity = String(1 - header1Progress);

            // Header 2 animation
            const header2StartProgress = (self.progress - 0.4) * 10;
            const header2Progress = Math.max(0, Math.min(header2StartProgress, 1));
            const header2Scale = interpolate(0.75, 1, header2Progress);
            const header2Blur = interpolate(10, 0, header2Progress);

            header2.style.transform = `translate(-50%, -50%) scale(${header2Scale})`;
            header2.style.filter = `blur(${header2Blur}px)`;
            header2.style.opacity = String(header2Progress);

            // Cube animations
            const firstPhaseProgress = Math.min(self.progress * 2, 1);
            const secondPhaseProgress =
              self.progress >= 0.5 ? (self.progress - 0.5) * 2 : 0;

            // Animate each cube
            Object.entries(cubesData).forEach(([cubeClass, data]) => {
              const cube = document.querySelector(`.${cubeClass}`) as HTMLElement | null;
              if (!cube) return; // Skip if cube not found

              const { initial, final } = data;

              // Calculate current position and rotation values
              const currentTop = interpolate(
                initial.top,
                final.top,
                firstPhaseProgress
              );
              const currentLeft = interpolate(
                initial.left,
                final.left,
                firstPhaseProgress
              );
              const currentRotateX = interpolate(
                initial.rotateX,
                final.rotateX,
                firstPhaseProgress
              );
              const currentRotateY = interpolate(
                initial.rotateY,
                final.rotateY,
                firstPhaseProgress
              );
              const currentRotateZ = interpolate(
                initial.rotateZ,
                final.rotateZ,
                firstPhaseProgress
              );
              const currentZ = interpolate(initial.z, final.z, firstPhaseProgress);

              // Additional rotation for specific cubes
              let additionalRotation = 0;
              if (cubeClass === "cube-2") {
                additionalRotation = interpolate(0, 180, secondPhaseProgress);
              } else if (cubeClass === "cube-4") {
                additionalRotation = interpolate(0, -180, secondPhaseProgress);
              }

              // Apply transformations
              cube.style.top = `${currentTop}%`;
              cube.style.left = `${currentLeft}%`;
              cube.style.transform = `
                  translate3d(-50%, -50%, ${currentZ}px)
                  rotateX(${currentRotateX}deg)
                  rotateY(${currentRotateY + additionalRotation}deg)
                  rotateZ(${currentRotateZ}deg)
              `;
            });
          },
        });
      } else {
        // Retry if scripts aren't loaded yet
        setTimeout(initializeOrchestra, 100);
      }
    };

    // Wait for scripts to load then initialize orchestra
    setTimeout(initializeOrchestra, 1000);

    // Cleanup function
    return () => {
      // Clean up any event listeners or animations
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white h-screen relative overflow-hidden">
        {/* Top section with improved layout */}
        <div className="w-full flex flex-col h-auto border-t border-[#21212155] py-[20px] sm:mb-[60px] xm:mb-[60px] gap-[30px]">
          <div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">

          </div>

          {/* Static text instead of animated scrolling text */}
          <div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
            <p className="paragraph opacity-50 font-NeueMontreal text-secondry">
              Explore Nuke Marketing.
            </p>
          </div>
        </div>

      

        {/* Creative agency main content without animations */}
        <div className="w-full flex flex-col items-center justify-center min-h-[50vh] padding-x z-10 relative">
          {/* Static headlines instead of animated ones */}
          <div className="overflow-hidden mb-4">
            <div className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry mb-1">
              Create.
            </div>
          </div>
          <div className="overflow-hidden mb-4">
            <div className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry mb-1">
              Innovate.
            </div>
          </div>
          <div className="overflow-hidden mb-12">
            <div className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry">
              Disrupt.
            </div>
          </div>

          {/* Static description */}
          <p className="text-xl sm:text-lg xm:text-lg text-secondry/70 mb-12 text-center max-w-xl leading-relaxed">
            We craft stories that blur the line between art and strategy.
            Where brands become experiences, and ideas transform into culture.
          </p>

          {/* Static CTA */}
          <div className="group relative mb-16">
            <Link href="/contact">
              <div className="relative z-10 py-4 px-10 border-2 border-secondry rounded-full overflow-hidden">
                <span className="relative z-10 text-secondry font-medium">
                  Talk to Us
                </span>
              </div>
            </Link>
          </div>

          {/* Static process tags */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {['Strategy', 'Design', 'Digital', 'Brand', 'Content', 'Experience', 'Motion'].map((tag, i) => (
              <div
                key={tag}
                className="px-4 py-1 rounded-full border border-secondry/30 text-secondry/70 text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Static scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="text-secondry flex flex-col items-center">
            <p className="mb-2 text-sm uppercase tracking-wider">Scroll</p>
            <MousePointer size={18} strokeWidth={1.25} />
          </div>
        </div>

        {/* Static Background */}
        <div className="absolute inset-0 z-0">
          <WavyBackgroundDemo />
        </div>
      </section>

      {/* Orchestra Section */}
      <style jsx global>{`
        .orchestra-section * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .orchestra-section {
          width: 100vw;
          height: 280vh;
          font-family: Arial, Helvetica, sans-serif;
        }

        .orchestra-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-color: #fff;
        }

        .orchestra-section .sticky {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: #000000;
          color: #ffe9d9;
        }

        .orchestra-section .logo {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 24px;
          z-index: 2;
        }

        .orchestra-section .col {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .orchestra-section .col:nth-child(2) {
          gap: 26px;
        }

        .orchestra-section .block {
          width: 35px;
          height: 35px;
          background-color: #ffe9d9;
        }

        .orchestra-section .block-1 {
          transform: rotate(42deg);
          transform-origin: bottom right;
        }

        .orchestra-section .block-5 {
          transform: rotate(-42deg);
          transform-origin: bottom left;
        }

        .orchestra-section .cubes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          transform-style: preserve-3d;
          perspective: 10000px;
        }

        .orchestra-section .cube {
          position: absolute;
          width: 150px;
          height: 150px;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .orchestra-section .cube>div {
          position: absolute;
          width: 150px;
          height: 150px;
          transform-style: preserve-3d;
          backface-visibility: visible;
          overflow: hidden;
        }

        .orchestra-section .front {
          transform: translateZ(75px);
        }

        .orchestra-section .back {
          transform: translateZ(-75px) rotateY(180deg);
        }

        .orchestra-section .right {
          transform: translateX(75px) rotateY(90deg);
        }

        .orchestra-section .left {
          transform: translateX(-75px) rotateY(-90deg);
        }

        .orchestra-section .top {
          transform: translateY(-75px) rotateX(90deg);
        }

        .orchestra-section .bottom {
          transform: translateY(75px) rotateX(-90deg);
        }

        .orchestra-section .cube-1 {
          top: -55%;
          left: 37.5%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(360deg) rotateY(-360deg) rotateZ(-48deg);
        }

        .orchestra-section .cube-2 {
          top: -35%;
          left: 32.5%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(-180deg) rotateY(180deg) rotateZ(90deg);
        }

        .orchestra-section .cube-3 {
          top: -65%;
          left: 50%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(-90deg) rotateY(-90deg) rotateZ(-180deg);
        }

        .orchestra-section .cube-4 {
          top: -35%;
          left: 50%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(-90deg) rotateY(-90deg) rotateZ(-180deg);
        }

        .orchestra-section .cube-5 {
          top: -55%;
          left: 62.5%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(180deg) rotateY(180deg) rotateZ(-135deg);
        }

        .orchestra-section .cube-6 {
          top: -35%;
          left: 67.5%;
          transform: translate3d(-50%, -50%, -30000px) rotateX(-90deg) rotateY(-180deg) rotateZ(-180deg);
        }

        .orchestra-section .header-1 {
          width: 60%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          transform-origin: center center;
          text-align: center;
          color: #ffe9d9;
        }

        .orchestra-section .header-1 h1 {
          font-weight: 400;
          font-size: 4rem;
          line-height: 1;
        }

        .orchestra-section .header-2 {
          width: 30%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.75);
          transform-origin: center center;
          text-align: center;
          opacity: 0;
          filter: blur(10px);
          color: #ffe9d9;
        }

        .orchestra-section .header-2 h2 {
          margin-bottom: 0.5rem;
        }

        .orchestra-section .header-2 p {
          font-size: 1.25rem;
          font-weight: lighter;
        }

        .orchestra-section .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }

        .orchestra-section .lenis.lenis-stopped {
          overflow: clip;
        }

        .orchestra-section .lenis.lenis-smooth iframe {
          pointer-events: none;
        }
      `}</style>

      <div className="orchestra-section">
        <section className="sticky">
          <div className="logo">
            <div className="col">
              <div className="block block-1"></div>
              <div className="block block-2"></div>
            </div>
            <div className="col">
              <div className="block block-3"></div>
              <div className="block block-4"></div>
            </div>
            <div className="col">
              <div className="block block-5"></div>
              <div className="block block-6"></div>
            </div>
          </div>

          <div className="cubes">
            <div className="cube cube-1">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>

            <div className="cube cube-2">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>

            <div className="cube cube-3">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>

            <div className="cube cube-4">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>

            <div className="cube cube-5">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>

            <div className="cube cube-6">
              <div className="front"></div>
              <div className="back"></div>
              <div className="right"></div>
              <div className="left"></div>
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
          </div>

          <div className="header-1">
            <h1>
            Your brand deserves a strategy that pulls in leads and sales like a magnet and makes engagement explode.💥


            </h1>
          </div>

          <div className="header-2">
            <h2>Where innovation meets precision.</h2>
            <p>
              Your brand deserves a strategy that pulls in leads and sales like a magnet and makes engagement explode!!!

              With viral-worthy social media and a brand identity that sticks, we help you turn attention into real business growth.

            </p>
          </div>
        </section>
      </div>
    </>
  );
}