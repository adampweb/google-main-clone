import React from "react";
import styles from "../header.module.css";

const TabSelector = ({...props}) => {
    return(
        <>
            <div id={styles["SBmmZd"]}>
                <a className={styles.active} href={"#all"}>All</a>
                <a href={"#images"}>Images</a>
            </div>
            <div className={styles.igu8Pb}></div>
        </>
    );
}
export default TabSelector;