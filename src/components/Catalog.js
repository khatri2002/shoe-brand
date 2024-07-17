import Button from "../components/Button";

import styles from "../assets/styles/catalog.module.scss";

import shoeImg1 from "../assets/images/shoe_1.png";
import unisexLogo from "../assets/images/unisex_logo.svg";
import Card from "./Card";
import { useRef, useState } from "react";

function Catalog() {

    const tempArr = Array(10).fill(0);

    const cardsContainerRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        const cardsContainer = cardsContainerRef.current;
        const startX = e.pageX - cardsContainer.offsetLeft;
        setStartX(startX);
        const scrollLeft = cardsContainer.scrollLeft;
        setScrollLeft(scrollLeft);
    }

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const cardsContainer = cardsContainerRef.current;
        const x = e.pageX - cardsContainer.offsetLeft;
        const walk = x - startX;
        cardsContainer.scrollLeft = scrollLeft - walk;
    }

    const handleMouseLeave = () => {
        setIsDown(false);
    }

    const handleMouseUp = () => {
        setIsDown(false);
    }

    return (
        <>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h2>
                        An independent <span className={styles.textUnderline}>brand</span> of urban trekking shoes and accessories that comes from a convergence of arts and personalities.
                    </h2>
                </div>
            </div>

            <div
                className={`${styles.cardsContainer} ${isDown ? styles.active : ""}`}
                ref={cardsContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
            >
                {
                    tempArr.map((_, index) => {
                        return (
                            <Card
                                key={index}
                                productImg={shoeImg1}
                                brandImg={unisexLogo}
                                numberText="01"
                                productTitle="Cactus"
                                strikePrice="199"
                                price="99"
                            />
                        );
                    })
                }
            </div>

            <div className={styles.btnContainer}>
                <Button title="Explore" direction="right" />
            </div>

            <div className={styles.reviewsContainer}>
                <div className={styles.review}>
                    <div className={styles.leftTitle}>
                        <h3>William Gibson</h3>
                    </div>
                    <div className={styles.rightContent}>
                        <span>
                            Good things come to those who wait - Deplace Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;