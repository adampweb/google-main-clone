import React from "react"
import styles from "../header.module.css"

const SidebarItem = ({...props}) => {
    return (
        <a className={styles.rYDfvb} href={props.href} role={"menuitem"}>
            <img alt={props.img_alt} className={styles.EuAkLc} src={props.icon}/>
            {props.title}
        </a>
    );
}
export default SidebarItem;