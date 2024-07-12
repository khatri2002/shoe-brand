import Button from "../components/Button";

import styles from "../assets/styles/catalog.module.scss";

import shoeImg1 from "../assets/images/shoe_1.png";
import unisexLogo from "../assets/images/unisex_logo.svg";

function Catalog() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h2>
                        An independent <span className={styles.textUnderline}>brand</span> of urban trekking shoes and accessories that comes from a convergence of arts and personalities.
                    </h2>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.productImg}
                        src={shoeImg1}
                        alt=""
                    />
                    <img
                        className={styles.brandImg}
                        src={unisexLogo}
                        alt=""
                    />
                    <span className={styles.numberText}>
                        ss/20
                    </span>
                    <h3 className={styles.productTitle}>
                        Cactus
                    </h3>
                    <del className={styles.strikePrice}>
                        &#8364; 300 EUR
                    </del>
                    <span className={styles.price}>
                        &#8364; 180 EUR
                    </span>
                </div>
            </div>

            <Button title="Explore" />

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
        </div>
    );
}

export default Catalog;