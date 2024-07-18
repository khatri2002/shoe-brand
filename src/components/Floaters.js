import { useEffect, useState } from "react";
import styles from "../assets/styles/floaters.module.scss";
import animationStyles from "../assets/styles/animations.module.scss";

function Floaters() {

    // cookies state
    const [showCookies, setShowCookies] = useState(false);
    const [hideCookies, setHideCookies] = useState(false);

    // show cookies on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000 && !showCookies) {
                setShowCookies(true);
            }
        }
        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showCookies]);

    // hide title animation on small screens
    const isSmallScreen = window.innerWidth <= 992;

    return (
        <>
            {/* top */}
            <div className={styles.topNavContainer}>
                <div className={`${styles.leftTitle} ${animationStyles.wrapper}`}>
                    <h3 className={`${!isSmallScreen ? animationStyles.slideTop1 : ""}`}>Deplace Maison</h3>
                </div>
                <div className={styles.rightSubTitle}>
                    <span>Cart</span>
                    <span>Cart</span>
                </div>
            </div>

            {/* left bottom */}
            <div className={styles.bottomNavContainer}>
                <ul>
                    <li>
                        <span>Shop</span>
                        <span>Shop</span>
                    </li>
                    <li>
                        <span>Collections</span>
                        <span>Collections</span>
                    </li>
                    <li>
                        <span>About</span>
                        <span>About</span>
                    </li>
                </ul>
            </div>

            {/* right bottom */}
            <div
                className={`
                    ${styles.cookiesContainer}
                    ${showCookies ? animationStyles.slideTopFadeIn : ""}
                    ${hideCookies ? animationStyles.slideDownFadeOut : ""}
                `}
            >
                <div>
                    <span>
                        This website use <a href="/">cookies</a>.
                    </span>
                    <span>
                        By continuing to browse you accept their use.
                    </span>
                </div>
                <div>
                    <span onClick={() => setHideCookies(true)}>OK</span>
                </div>
            </div>
        </>
    );
}

export default Floaters;