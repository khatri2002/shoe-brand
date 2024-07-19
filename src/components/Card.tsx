import styles from "../assets/styles/card.module.scss";

type CardProps = {
    productImg: any;
    brandImg: any;
    numberText: string;
    productTitle: string;
    strikePrice: number;
    price: number;
};

const Card = ({productImg, brandImg, numberText, productTitle, strikePrice, price}: CardProps) => {
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