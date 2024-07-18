
import {ReactComponent as CircleIcon} from "../assets/images/circle_icon.svg";
import {ReactComponent as ArrowIcon} from "../assets/images/arrow_icon.svg";

import styles from "../assets/styles/Button.module.scss";

function Button({title, direction, onClick}) {
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
                    <CircleIcon className={styles.iconCircle} />
                    <ArrowIcon className={`${styles.iconArrow} ${direction==='right' ? styles.directionRight : styles.directionUp}`} />
                </div>
            </div>
        </>
    );
}

export default Button;