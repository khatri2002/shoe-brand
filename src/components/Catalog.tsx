import { useRef, useState } from "react";

import UseElementOnScreen from "Hooks/UseElementOnScreen";

import Button from "components/Button";
import Card from "./Card";

import styles from "../assets/styles/catalog.module.scss";
import animationStyles from "../assets/styles/animations.module.scss";

import shoeImg1 from "../assets/images/shoe_1.png";
import unisexLogo from "../assets/images/unisex_logo.svg";

const Catalog = () => {

    const tempArr = Array(10).fill(0);

    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);

    const [isCardsWrapperVisible] = UseElementOnScreen({
        options: {
            threshold: 0.5
        },
        containerRef: cardsWrapperRef
    })

    // Mouse events for scrolling the cards container
    const [isDown, setIsDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [velocity, setVelocity] = useState<number>(0);
    const [lastX, setLastX] = useState<number>(0);
    const [lastTime, setLastTime] = useState<number>(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        const cardsContainer = cardsContainerRef.current;
        if(!cardsContainer) return;
        const startX = e.pageX - cardsContainer.offsetLeft;
        setStartX(startX);
        const scrollLeft = cardsContainer.scrollLeft;
        setScrollLeft(scrollLeft);
        setLastX(e.pageX);
        setLastTime(Date.now());
    }
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDown(true);
        const cardsContainer = cardsContainerRef.current;
        if(!cardsContainer) return;
        const startX = e.touches[0].pageX - cardsContainer.offsetLeft;
        setStartX(startX);
        const scrollLeft = cardsContainer.scrollLeft;
        setScrollLeft(scrollLeft);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const cardsContainer = cardsContainerRef.current;
        if(!cardsContainer) return;
        const x = e.pageX - cardsContainer.offsetLeft;
        const walk = x - startX;
        cardsContainer.scrollLeft = scrollLeft - walk;

        // Calculate velocity
        const time = Date.now();
        const distance = e.pageX - lastX;
        const timeDiff = time - lastTime;
        const velocity = distance / timeDiff;

        setLastX(e.pageX);
        setLastTime(time);
        setVelocity(velocity);
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const cardsContainer = cardsContainerRef.current;
        if(!cardsContainer) return;
        const x = e.touches[0].pageX - cardsContainer.offsetLeft;
        const walk = x - startX;
        cardsContainer.scrollLeft = scrollLeft - walk;

        // Calculate velocity
        const distance = e.touches[0].pageX - lastX;
        const timeDiff = Date.now() - lastTime;
        const velocity = distance / timeDiff;

        setLastX(e.touches[0].pageX);
        setLastTime(Date.now());
        setVelocity(velocity);
    }

    const handleEnd = () => {
        setIsDown(false);
        
        // apply momentum scroll
        const cardsContainer = cardsContainerRef.current;
        if(!cardsContainer) return;

        let currentVelocity = velocity;
        const deceleration = 0.95;

        const step= () => {
            if(Math.abs(currentVelocity) > 0.1) {
                cardsContainer.scrollLeft -= currentVelocity * 16;
                currentVelocity *= deceleration;
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
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
                ref={cardsWrapperRef}
                className={animationStyles.wrapper}
            >
                <div
                    className={
                        `${styles.cardsContainer} 
                        ${isDown ? styles.active : ""}
                        ${isCardsWrapperVisible ? animationStyles.slideLeft : ""}
                    `}
                    ref={cardsContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => isDown && handleEnd()}
                    onMouseUp={handleEnd}

                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleEnd}
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
                                    strikePrice={199}
                                    price={99}
                                />
                            );
                        })
                    }
                </div>
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