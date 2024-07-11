import styles from "../assets/styles/catalog.module.scss";

function Catalog() {
    return (
        <>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h2>
                        An independent <span className={styles.textUnderline}>brand</span> of urban trekking shoes and accessories that comes from a convergence of arts and personalities.
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Catalog;