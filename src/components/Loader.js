import { useEffect, useState } from "react";
import styles from "../assets/styles/loader.module.scss";
import animationStyles from "../assets/styles/animations.module.scss";

function Loader() {

    const [loading, setLoading] = useState(true);

    const percentages = [30, 68, 87, 100];
    const [activeIndex, setActiveIndex] = useState(0);
    const [exitIndices, setExitIndices] = useState([]);

    useEffect(() => {

        document.body.style.overflow = "hidden";

        const percentageInterval = setInterval(() => {
            if(activeIndex < percentages.length - 1) {
                setExitIndices([...exitIndices, activeIndex]);
                setActiveIndex(activeIndex + 1);
            } else {
                clearInterval(percentageInterval);
                setLoading(false);
                document.body.style.overflow = "auto";
            }
        }, 550);

        return () => {
            clearInterval(percentageInterval);
        }
    });

    return (
        <>
            <div className={`${styles.loaderContainer} ${!loading && animationStyles.slideTopLoader}`}>
                <div className={styles.percentageContainer}>
                    {
                        percentages.map((percentage, index) => {

                            const className = index === activeIndex
                            ? styles.active
                            : exitIndices.includes(index)
                            ? styles.exit
                            : "";

                            return (
                                <span 
                                    key={index}
                                    className={className}
                                >
                                    {percentage} %
                                </span>
                            )
                        })
                    }
                </div>

                <div className={styles.copyrightContainer}>
                    <span>
                        &#169; 2020 Deplace Maison
                    </span>
                    <span>
                        All rights reserved.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Loader;