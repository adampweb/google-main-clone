import React from "react";
import styles from "../header.module.css";
import SidebarItem from "./SidebarItem";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ChildProps {
    parentFunction: Function
}

const Sidebar = ({...props}) => {
    return (
        <div className={styles.SSH64d} style={props.style} aria-hidden={true} id={"UCqTdf"}>
            <div className={styles.emdozc} id={"nd_1"} aria-label={"Navigation drawer"} role={"menu"} style={{transform: props.open ? "translateX(250px)" : "translateX(0)" }}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.Is2Q0d} href={"#"} aria-label={"Close the drawer"} role={"menuitem"} onClick={(e) => props.parentFunction.toggleSidebar(e)}>&nbsp;</a>

                <SidebarItem
                    href={"#home"}
                    img_alt={"Home"}
                    icon={"https://www.gstatic.com/navigationdrawer/home_icon.svg"}
                    title={"Home"}
                />
                <SidebarItem
                    href={"#search-history"}
                    img_alt={"Search history"}
                    icon={"https://www.gstatic.com/navigationdrawer/search_activity_icon.svg"}
                    title={"Search history"}
                />
                <SidebarItem
                    href={"#collections"}
                    img_alt={"Collections"}
                    icon={"https://www.gstatic.com/navigationdrawer/save_icon.svg"}
                    title={"Collections"}
                />
                <SidebarItem
                    href={"#offline-searches"}
                    img_alt={"Offline searches"}
                    icon={"https://www.gstatic.com/navigationdrawer/manage_searches_icon.svg"}
                    title={"Offline searches"}
                />
                <div className={styles.qlCFie} aria-hidden="true"></div>

                <SidebarItem
                    href={"#search-settings"}
                    img_alt={"Search settings"}
                    icon={"https://www.gstatic.com/navigationdrawer/settings_icon.svg"}
                    title={"Search settings"}
                />
                <SidebarItem
                    href={"#your-data-in-search"}
                    img_alt={"Your data in Search"}
                    icon={"https://www.gstatic.com/navigationdrawer/privacy_advisor_icon.svg"}
                    title={"Your data in Search"}
                />
                <SidebarItem
                    href={"#safesearch"}
                    img_alt={"SafeSearch: Off"}
                    icon={"https://www.gstatic.com/navigationdrawer/explicit_icon.svg"}
                    title={"SafeSearch: Off"}
                />

                <div role="menuitem">
                    <div className={styles.ys8upe} role="link" tabIndex={0}>
                        <span className={`${styles.qAGLdf} ${styles.z1asCe}`}>
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"></rect><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                        </span>Dark theme: off
                    </div>
                </div>

                <SidebarItem
                    href={"#howsearchworks"}
                    img_alt={"How Search works"}
                    icon={"https://www.gstatic.com/navigationdrawer/how_search_works_icon.svg"}
                    title={"How Search works"}
                />
                <SidebarItem
                    href={"#help"}
                    img_alt={"Help"}
                    icon={"https://www.gstatic.com/navigationdrawer/help_icon.svg"}
                    title={"Help"}
                />
                <SidebarItem
                    href={"#send-feedback"}
                    img_alt={"Send feedback"}
                    icon={"https://www.gstatic.com/navigationdrawer/feedback_icon.svg"}
                    title={"Send feedback"}
                />

            </div>
        </div>
    );
}
export default Sidebar;