
import styles from "../assets/styles/Button.module.scss";

import CircleIcon from "../assets/images/circle_icon.svg";
import ArrowIcon from "../assets/images/arrow_icon.svg";

type ButtonProps = {
    title?: string;
    direction: 'right' | 'up';
    onClick?: () => void;
}

const Button = ({title, direction, onClick}: ButtonProps) => {
    return (
        <>
            <div className={styles.btnContainer} onClick={onClick}>
                {
                    title &&
                    <h3>
                        {title}
                    </h3>
                }
                <div className={styles.btn}>
                    <img src={CircleIcon} className={styles.iconCircle} alt="circle-icon" />
                    <img 
                        src={ArrowIcon} 
                        className={`
                            ${styles.iconArrow} 
                            ${direction==='right' ? 
                                styles.directionRight 
                                : 
                                styles.directionUp}
                        `} 
                        alt="arrow-icon" 
                    />
                </div>
            </div>
        </>
    );
}

export default Button;