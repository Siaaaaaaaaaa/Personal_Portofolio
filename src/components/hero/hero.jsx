import React from 'react';
import { getImageUrl } from "../../util";
import styles from "./hero.module.css";
import heroImage from "../../../assets/hero/poza_eu.jpg";

export const Hero = () => { 
    return (
        <section className={styles.container}>
            
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Anastasia</h1>

                <h2 className={styles.subtitle}> Applied Mathematics & Computer Science Undergraduate @ Politehnica University of Bucharest</h2>

                <p className={styles.description}>
                  
                  I am a programming enthusiast looking for opportunities to develop, grow and learn. I am team player, always looking to contribute with ideas to complex problems that arise. 
                  This page is for you to get to know me better!
                </p>

                <a
                    href="mailto:anastasiamaria.mares@gmail.com"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>

            <img
                src={heroImage} //implementation for importing images in a react component
                alt="Hero image of me"
                className={styles.heroImg}
            />

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
