import { useEffect, useState } from "react";
import styles from "../assets/styles/floaters.module.scss";
import animationStyles from "../assets/styles/animations.module.scss";

function Floaters() {

    const [showCookies, setShowCookies] = useState(false);
    const [hideCookies, setHideCookies] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 1000 && !showCookies) {
                setShowCookies(true);
            }
        }
        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [showCookies]);

    return (
        <>
            {/* top */}
            <div className={styles.topNavContainer}>
                <div className={styles.leftTitle}>
                    <h3>Deplace Maison</h3>
                </div>
                <div className={styles.rightSubTitle}>
                    <span>Cart</span>
                </div>
            </div>

            {/* left bottom */}
            <div className={styles.bottomNavContainer}>
                <ul>
                    <li>Shop</li>
                    <li>Collections</li>
                    <li>About</li>
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