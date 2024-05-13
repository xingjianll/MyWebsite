'use client'


import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props: { id: string | undefined; }) => {
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            background: {
                color: "#f0f0f5", // this sets a background color for the canvas
            },
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true, // enables the hover event
                        mode: "grab", // make the particles run away from the cursor
                    },
                },
                modes: {
                    grab: {
                        distance: 250,
                        line_linked: {
                            opacity: 2
                        }
                    }
                },
            },
            particles: {
                number: {
                    value: 35,
                    density: {
                        enable: false,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#1E3972',
                },
                links: {
                    enable: false, // enabling this will make particles linked together
                    distance: 250, // maximum distance for linking the particles
                    color: {
                        value: '#1E3972',
                    },
                },
                move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: {min: 1, max: 7}, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                },
                opacity: {
                    value: {min: 0.2, max: 0.8}, // using a different opacity, to have some semitransparent effects
                },
                size: {
                    value: {min: 1, max: 6}, // let's randomize the particles size a bit
                },
            },
        };
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine: Engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    // @ts-ignore
    return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;