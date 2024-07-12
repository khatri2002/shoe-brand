import { useEffect, useState } from "react";

import styles from "../assets/styles/landing.module.scss";

import featuredShoeImg1 from "../assets/images/featured_shoe_img_1.jpeg";
import featuredShoeImg2 from "../assets/images/featured_shoe_img_2.jpeg";
import Button from "./Button";

function Landing() {

    const [zoom, setZoom] = useState(1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newZoom = 1 + scrollY / 2000;
        setZoom(newZoom);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={styles.container}>

                <div className={styles.heroTextContainer}>
                    <h1>Spring,</h1>
                    <div className={styles.heroTextLower}>
                        <h1>Summer</h1>
                        <h3>
                            <span>Coll.</span>
                            <span>2021</span>
                        </h3>
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <div className={styles.imgCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src={featuredShoeImg1}
                                alt="Featured Shoe - 2"
                                style={{ transform: `scale(${zoom})` }}
                            />
                        </div>
                        <div className={styles.lowerTextContainer}>
                            <span>(01)</span>
                            <span>MAN</span>
                        </div>
                    </div>
                    <div className={styles.imgCard}>
                        <div className={styles.imgContainer}>
                            <img
                                src={featuredShoeImg2}
                                alt="Featured Shoe - 2"
                                style={{ transform: `scale(${zoom})` }}
                            />
                        </div>
                        <div className={styles.lowerTextContainer}>
                            <span>(02)</span>
                            <span>WMNS</span>
                        </div>
                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <Button title="Explore" direction="right" />
                </div>

            </div>
        </>
    );
}

export default Landing;