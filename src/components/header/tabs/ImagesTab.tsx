import React from "react";
import styles from "./tabs.module.css";

const ImagesTab = ({...props}) => {
    return(
        <>
            <div id={styles["outer"]} className={"images-tab"} style={props.style}>
                <div id={styles['hplogo-frame']}>
                    <div id={styles["hplogo-images"]} aria-label={"Google"}>
                        <div id={styles["hplogo-sub"]}>images</div>
                    </div>
                </div>
                <div id={styles["main"]}>
                    <div className={styles.Gwkg9c}>
                        <form className={styles.tsf} action={"#search"} id={styles["tsf"]} method={"GET"} name={"gs"} role={"search"}>
                            <div>
                                <div className={`${styles.A7Yvie} ${styles.Epl37}`}>
                                    <div className={styles.zGVn2e}>
                                        <button type={"button"} className={styles.Cdl0yb} id={styles["tsuid_1"]} tabIndex={0} aria-label={"Back"} role={"button"} >
                                            <div className={styles.Z7Bonf}>
                                                <span className={styles.z1asCe}>
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                                                </span>
                                            </div>
                                        </button>
                                        <button className={`${styles.Tg7LZd} ${styles.search_button_suggest}`} aria-label={"Google Search"} type={"button"}>
                                            <div className={styles.gBCQ5d}>
                                                <span className={`${styles.z1asCe} ${styles.MZy1Rb}`}>
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                                </span>
                                            </div>
                                        </button>
                                        <button className={`${styles.Tg7LZd} ${styles.u6FVyd}`} aria-label={"Google Search"} type={"button"}></button>
                                        <div className={styles.SDkEP}>
                                            <div className={styles.a4bIc} aria-expanded={false} aria-haspopup={"listbox"} role={"combobox"} aria-controls={"gLFyf"}>
                                                <input
                                                    type="text"
                                                    className={styles.gLFyf}
                                                    id={styles.gLFyf}
                                                    maxLength={2048}
                                                    name={"q"}
                                                    aria-autocomplete={"list"}
                                                    aria-describedby={"sb_input_box_aria_description_X9ZGZMGCBJWH9u8PnKyRkAk_1"}
                                                    autoCapitalize={"off"}
                                                    autoComplete={"off"}
                                                    autoCorrect={"off"}
                                                    role={"textbox"}
                                                    spellCheck={"false"}
                                                    tabIndex={0}
                                                    aria-label={"Google Search"}
                                                />
                                                <div hidden={true} id={"sb_input_box_aria_description_X9ZGZMGCBJWH9u8PnKyRkAk_1"}>
                                                    <span>Double-tap to search Google.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.dRYYxd}>
                                            <button className={styles.RP0xob} id={styles["tsuid_3"]} tabIndex={0} type={"button"} style={{"display": "none"}}>
                                                <span aria-label={"Clear Search"} className={styles.z1asCe}>
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                                </span>
                                            </button>
                                            <a className={styles.eiZhDe} href={"#search-by-image"} tabIndex={0} aria-label={"Search using your camera or photos"}>
                                                <button className={styles.AcPRKc} tabIndex={-1} type={"button"} title={"Camera search"}>
                                                    <svg className={styles.b4yCbb} focusable="false"
                                                         viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                                                        <rect fill="none" height="192" width="192"></rect>
                                                        <g>
                                                            <circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle>
                                                            <path fill="#ea4335"
                                                                  d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"></path>
                                                            <path fill="#4285f4"
                                                                  d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"></path>
                                                            <path fill="#34a853"
                                                                  d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"></path>
                                                            <path fill="#fbbc05"
                                                                  d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
export default ImagesTab;