import styles from "../assets/styles/floaters.module.scss";

function Floaters() {
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
            <div className={styles.cookiesContainer}>
                <div>
                    <span>
                        This website use <a href="/">cookies</a>.
                    </span>
                    <span>
                        By continuing to browse you accept their use.
                    </span>
                </div>
                <div>
                    <span>OK</span>
                </div>
            </div>
        </>
    );
}

export default Floaters;