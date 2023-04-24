import React from "react";
import styles from "./tabs.module.css";

const ImagesTab = ({...props}) => {
    return(
        <>
            <div id={styles["outer"]} className={"images-tab"} style={props.style}>
                <div id={styles['hplogo-frame']}>

                </div>
            </div>
        </>
    );
}
export default ImagesTab;