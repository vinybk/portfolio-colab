"use client"
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles"
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#ff0000", "#00ff99", "#0066ff"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.4,
            width: 0.5,
            triangles: {
              enable: false
            }
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: ["grab"]
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1,
                color: "#00ff99"
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;
