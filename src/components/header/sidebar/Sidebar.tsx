import React, {useRef, useEffect} from "react";
import styles from "../header.module.css";
import SidebarItem from "./SidebarItem";
import sidebarItems from "./sidebar-items.json";


/**
 * Hook that alerts clicks outside the passed ref
 */
function useOutsideAlerter(ref: any, callback: Function) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, ref]);
}

const Sidebar = ({...props}) => {
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, props.parentFunction.toggleSidebar);

    return (
        <div className={styles.SSH64d} style={props.style} aria-hidden={true} id={"UCqTdf"}>
            <div ref={wrapperRef} className={styles.emdozc} id={"nd_1"} aria-label={"Navigation drawer"} role={"menu"} style={{transform: props.open ? "translateX(250px)" : "translateX(0)" }}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={styles.Is2Q0d} href={"#"} aria-label={"Close the drawer"} role={"menuitem"} onClick={(e) => props.parentFunction.toggleSidebar(e)}>&nbsp;</a>

                {sidebarItems.map((sidebarItem, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            href={sidebarItem.href}
                            img_alt={sidebarItem.img_alt}
                            icon={sidebarItem.icon}
                            title={sidebarItem.title}
                        />
                    )
                })}

            </div>
        </div>
    );
}
export default Sidebar;