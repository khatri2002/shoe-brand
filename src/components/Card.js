import styles from "../assets/styles/card.module.scss";

function Card({productImg, brandImg, numberText, productTitle, strikePrice, price}) {
    return (
        <div className={styles.card}>
            <img
                className={styles.productImg}
                src={productImg}
                alt=""
            />
            <img
                className={styles.brandImg}
                src={brandImg}
                alt=""
            />
            <span className={styles.numberText}>
                {numberText}
            </span>
            <h3 className={styles.productTitle}>
                {productTitle}
            </h3>
            <del className={styles.strikePrice}>
                &#8364; {strikePrice} EUR
            </del>
            <span className={styles.price}>
                &#8364; {price} EUR
            </span>
        </div>
    );
}

export default Card;