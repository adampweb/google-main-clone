import React from "react";
import styles from "../../header/header.module.css";

const TabSelector = ({...props}) => {
    return(
        <>
            <div id={styles["SBmmZd"]}>
                <a
                    className={`${props.tabStates.mainTabState && styles.active }`}
                    href={"#all"}
                    onClick={(e) => props.mainTabFn.showMainTab(e)}>
                    All
                </a>
                <a
                    className={`${props.tabStates.imgTabState && styles.active }`}
                    href={"#images"}
                    onClick={(e) => props.imgTabFn.showImagesTab(e)}>
                    Images
                </a>
            </div>
            <div className={styles.igu8Pb}></div>
        </>
    );
}
export default TabSelector;