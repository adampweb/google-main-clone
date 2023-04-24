import React, { useState } from "react"
import styles from "./header.module.css"
import Sidebar from "./sidebar";
import TabSelector from "./tabs";
import AppSelector from "./menu";

function Header(){
    const [isShownSidebar, setIsShownSidebar] = useState(false);

    const toggleSidebar = (event: any) => {
        // 👇️ toggle shown state
        setIsShownSidebar(current => !current);
    };

    return (
        <header>
            <div>
                <div>
                    <div className={styles.KojFAc} aria-label={"Main menu"} aria-controls={"UCqTdf"} aria-expanded={false}
                         aria-haspopup={true} role={"button"} tabIndex={0} onClick={toggleSidebar}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </div>
                    {isShownSidebar && (<Sidebar style={{display: isShownSidebar ? 'block' : 'none' }} open={{isShownSidebar}} parentFunction={{toggleSidebar}}/>)}
                </div>
            </div>
            <TabSelector/>
            <AppSelector/>
        </header>
    )
}
export default Header;