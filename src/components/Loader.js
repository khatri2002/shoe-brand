import { useEffect, useState } from "react";
import styles from "../assets/styles/loader.module.scss";

function Loader() {

    const [loading, setLoading] = useState(true);
    const percentages = [30, 60, 90, 100];
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const [previousPercentage, setPreviousPercentage] = useState(0);
    const [percentageMap, setPercentageMap] = useState({
        current: 0,
        previous: 0
    });

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     setLoading(false);
        // }, 1000);

        // return () => clearTimeout(timer);

        let currentIndex = 0;
        const percentageInterval = setInterval(() => {
            setPercentageMap((prevState) => {
                return {
                    current: percentages[currentIndex],
                    previous: prevState.current
                }
            });
            currentIndex++;

            if(currentIndex === percentages.length) {
                clearInterval(percentageInterval);
            }
        }, 1000);

        return () => clearInterval(percentageInterval);
    }, []); 

    return (
        <>
            <div className={`${styles.loaderContainer} ${!loading && styles.hidden}`}>
                <div className={styles.percentageContainer}>
                    {
                        percentages.map((percentage, index) => {
                            return (
                                <span 
                                    key={index}
                                    className={`${percentageMap.current===percentage ? styles.active : ''} ${percentageMap.previous===percentage ? styles.exit : ''}`}
                                >
                                    {percentage} %
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Loader;