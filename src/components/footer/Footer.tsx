import React from "react"
import styles from "./footer.module.css"

const Footer = ({...props}) => {
    return (
        <div id={styles["footer"]}>
            <div className={`${styles.M6hT6} ${styles.f6F9Be}`} id={styles["fbar"]}>
                <div className={`${styles.fbar} ${styles.b2hzT}`}>
                    <div className={styles.b0KoTc}>
                        <span className={styles.Q8LRLc}>Hungary</span>
                    </div>
                </div>
                <div className={`${styles.fbar} ${styles.footer_homepage_mobile_settings_row_above_fold} ${styles.JQyAhb}`}>
                    <a className={styles.Fx4vi} href="#dark-theme" tabIndex={0} role={"button"}>Dark theme: off</a>
                    <span className={styles.j9xd9b}>
                        <div>
                            <a aria-haspopup={true} role={"button"} className={styles.Fx4vi} href="#settings">Settings</a>
                        </div>
                    </span>
                    <a className={styles.Fx4vi} href="#privacy" tabIndex={0} role={"button"}>Privacy</a>
                    <a className={styles.Fx4vi} href="#terms" tabIndex={0} role={"button"}>Terms</a>
                </div>
                <div className={`${styles.fbar} ${styles.M6hT6} ${styles.As6eLe} ${styles.Lt2Ned}`}>
                    <div>
                        <a className={styles.Fx4vi} href="#advertising" tabIndex={0} role={"button"}>Advertising</a>
                        <a className={styles.Fx4vi} href="#business" tabIndex={0} role={"button"}>Business</a>
                        <a className={styles.Fx4vi} href="#about" tabIndex={0} role={"button"}>About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;