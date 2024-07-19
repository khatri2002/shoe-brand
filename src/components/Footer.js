import styles from "../assets/styles/footer.module.scss";
import newsletterIcon from "../assets/images/newsletter_icon.svg";
import Button from "./Button";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook_icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram_icon.svg";

function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.subscribeItem}>
                    <span className={styles.textSmall}>Subscribe to newsletter</span>
                    <img src={newsletterIcon} alt="newsletter-icon" />
                    <label htmlFor="email">
                        Subscribe to our newsletter
                    </label>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="email address" />
                        <button>Submit</button>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.navigationItem}>
                        <span className={styles.textSmall}>Info</span>
                        <ul>
                            <li>
                                <span>FAQ</span>
                                <span>FAQ</span>
                            </li>
                            <li>
                                <span>Returns</span>
                                <span>Returns</span>
                            </li>
                            <li>
                                <span>Contact</span>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navigationItem}>
                        <span className={styles.textSmall}>Policy</span>
                        <ul>
                            <li>
                                <span>Terms</span>
                                <span>Terms</span>
                            </li>
                            <li>
                                <span>Privacy</span>
                                <span>Privacy</span>
                            </li>
                            <li>
                                <span>Cookie</span>
                                <span>Cookie</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.btnItem}>
                        <Button 
                            direction="up" 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                        />
                    </div>
                    <div className={styles.textItem}>
                        <span className={`${styles.textSmall} ${styles.cursorPointer}`}>Credits</span>
                    </div>
                    <div className={styles.textItem}>
                        <span className={styles.textSmall}>&#169; 2020 Deplace Masion.</span>
                    </div>
                    <div className={styles.socialsItem}>
                        <FacebookIcon className={styles.icon} />
                        <InstagramIcon className={styles.icon} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;