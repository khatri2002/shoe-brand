import { useEffect, useState } from "react";

import Button from "./Button";

import styles from "../assets/styles/landing.module.scss";
import animationStyles from "../assets/styles/animations.module.scss";

import featuredShoeImg1 from "../assets/images/featured_shoe_img_1.jpeg";
import featuredShoeImg2 from "../assets/images/featured_shoe_img_2.jpeg";

const Landing = () => {

    const [zoom, setZoom] = useState<number>(1);

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
                    <div className={`${styles.heroTextUpper} ${animationStyles.wrapper}`}>
                        <h1 className={animationStyles.slideTop1}>Spring,</h1>
                    </div>
                    <div className={`${styles.heroTextLower} ${animationStyles.wrapper}`}>
                        <h1 className={animationStyles.slideTop2}>Summer</h1>
                        <h3 className={animationStyles.slideTop3}>
                            <span>Coll.</span>
                            <span>2021</span>
                        </h3>
                    </div>
                </div>

                <div className={styles.imgContainer}>
                    <div className={animationStyles.wrapper}>
                        <div className={`${styles.imgCard} ${animationStyles.slideTop1}`}>
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
                    </div>
                    <div className={animationStyles.wrapper}>
                        <div className={`${styles.imgCard} ${animationStyles.slideTop2}`}>
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
                </div>

                <div className={styles.btnContainer}>
                    <Button title="Explore" direction="right" />
                </div>

            </div>
        </>
    );
}

export default Landing;