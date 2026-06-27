import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f172a",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#38bdf8",
          },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 180,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;