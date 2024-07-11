import styles from '../assets/styles/marqueeText.module.scss';

function MarqueeText() {
    return (
        <>
            <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        <div className={styles.item}>
                            <span className={styles.text}>Deplace Shop</span>
                            <span className={styles.square} />
                            <span className={styles.text}>Do Not Scroll</span>
                            <span className={styles.square} />
                        </div>
                        <div className={styles.item}>
                            <span className={styles.text}>Deplace Shop</span>
                            <span className={styles.square} />
                            <span className={styles.text}>Do Not Scroll</span>
                            <span className={styles.square} />
                        </div>
                        <div className={styles.item}>
                            <span className={styles.text}>Deplace Shop</span>
                            <span className={styles.square} />
                            <span className={styles.text}>Do Not Scroll</span>
                            <span className={styles.square} />
                        </div>
                        <div className={styles.item}>
                            <span className={styles.text}>Deplace Shop</span>
                            <span className={styles.square} />
                            <span className={styles.text}>Do Not Scroll</span>
                            <span className={styles.square} />
                        </div>
                        <div className={styles.item}>
                            <span className={styles.text}>Deplace Shop</span>
                            <span className={styles.square} />
                            <span className={styles.text}>Do Not Scroll</span>
                            <span className={styles.square} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MarqueeText;