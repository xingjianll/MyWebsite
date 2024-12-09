'use client';

import type { NextPage } from 'next';
import NavBar from "@/components/navbar/NavBar";
import Background from "@/components/background/Background";
import React, { useRef, useState, useEffect } from "react";
import styles from "./home.module.css";

const Home: NextPage = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const [pullAmount, setPullAmount] = useState(0);
    const maxPull = 80;

    const handleWheel = (e: React.WheelEvent) => {
        const container = mainRef.current;
        if (!container) return;

        // If we haven't reached maxPull, prevent normal scrolling
        if (pullAmount < maxPull) {
            e.preventDefault();
            // Increase pullAmount by the scroll delta, but clamp at maxPull
            // deltaY is typically positive when scrolling down
            const newPull = Math.min(maxPull, pullAmount + e.deltaY);
            setPullAmount(newPull);

            // Once we hit maxPull, enable scrolling
            if (newPull >= maxPull) {
                container.style.overflowY = "auto";
            }
        } else {
            // We've already pulled fully, let the container scroll normally
        }
    };

    // Initially, disable normal scrolling
    useEffect(() => {
        const container = mainRef.current;
        if (container) {
            container.style.overflowY = "hidden";
        }
    }, []);

    return (
        <main ref={mainRef} className={styles.mainContainer} onWheel={handleWheel}>
            {/*<NavBar />*/}
            <Background pullAmount={pullAmount} maxPull={maxPull} />
            <div className={styles.textContainer}>
                <p>Hi I&apos;m Kevin, a fourth year computer science student at the University of Toronto.</p>
            </div>

            <div className={styles.background2}>
                <div
                    className={styles.newSection}
                    style={{
                        transform: `translateY(-${pullAmount}px)`,
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <h2>More</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non mauris risus. Maecenas ac leo efficitur, congue erat a, lobortis purus. Nullam mattis augue nibh, eu imperdiet est accumsan a. Sed posuere velit lacus, non consectetur lorem ultricies quis. Nulla vitae mauris ac massa sollicitudin pulvinar. Integer a tempor dui, et aliquam nisl. Nulla aliquam, dui quis varius facilisis, ex diam eleifend erat, nec vulputate lacus quam dapibus est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam commodo scelerisque mi a aliquam. Mauris velit urna, fermentum sed leo quis, eleifend maximus nulla. Nam tempus nulla id ex iaculis, sed bibendum orci euismod. Mauris et nibh risus.

                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sit amet blandit sem. Cras sed purus consequat sem blandit venenatis. Quisque ut rhoncus neque, ut pulvinar leo. Nam fermentum ipsum eu nisl volutpat, in eleifend tellus fermentum. Sed non vehicula nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed viverra placerat aliquam.

                        Morbi consectetur lectus nec urna scelerisque, ut interdum libero luctus. Nulla sed rhoncus tellus, in aliquet nisl. Morbi viverra sem in tellus bibendum, eu dictum arcu mollis. Integer consectetur metus sed placerat dapibus. In ultrices, risus bibendum dapibus tincidunt, nunc augue lacinia velit, vel tincidunt purus elit nec nulla. Donec orci eros, placerat sed scelerisque a, vehicula eget dolor. Cras interdum risus quis bibendum cursus. Donec sodales et ligula et faucibus. Sed lobortis eros nisi, ac convallis metus porta ac. Vivamus porta mollis dolor eu eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam semper sodales pretium. Curabitur ut hendrerit diam. Suspendisse ac ullamcorper nisi. Nam quis dui viverra justo consectetur lacinia.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer consectetur mattis augue eleifend elementum. Phasellus iaculis a est eu tempor. Aenean pretium gravida fermentum. Aliquam fermentum, ipsum id molestie rutrum, libero mi elementum ligula, id bibendum ipsum elit mollis dolor. Etiam sit amet massa nulla. Donec quam nulla, ultrices et dictum vel, vulputate nec ipsum.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default Home;
