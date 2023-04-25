import React, { useState } from "react";
import Header from "./components/header";
import MainTab from "./components/main/tabs/MainTab";
import ImagesTab from "./components/main/tabs/ImagesTab";
import Footer from "./components/footer";

const App = () => {
    const [isShownMainTab, setIsShownMainTab] = useState(true);
    const [isShownImagesTab, setIsShownImagesTab] = useState(false);

    const [isShownMessage, setIsShownMessage] = useState(localStorage.getItem("showWarning") || "true");


    const showMainTab = (event: any) => {
        // 👇️ toggle shown state
        setIsShownMainTab(true);
        setIsShownImagesTab(false);
    };

    const showImagesTab = (event: any) => {
        // 👇️ toggle shown state
        setIsShownImagesTab(true);
        setIsShownMainTab(false);
    };

    const hideMessage = (event: any) => {
        localStorage.setItem("showWarning", "false");
        setIsShownMessage('false');
        console.log(isShownMessage)
    }

    return (
        <div className="App" id={"gb-main"}>
            <Header mainTabFn={{showMainTab}} imgTabFn={{showImagesTab}} tabStates={{mainTabState: isShownMainTab, imgTabState: isShownImagesTab}}/>
            {isShownMainTab && <MainTab style={{display: isShownMainTab ? 'block' : 'none' }}/>}
            {isShownImagesTab && <ImagesTab style={{display: isShownImagesTab ? 'block' : 'none' }}/>}
            {isShownMessage === "true" &&
                <div id="disclaimer" style={{display: isShownMessage === "true" ? 'block' : 'none' }}>
                    <h2><span>⚠️</span><span>⚠️</span><span>⚠️</span><br/>This clone app created only for learning purpose!</h2>
                    <button type={"button"} id={"hideWarningMsg"} onClick={(e) => hideMessage(e)}>Accept & hide message</button>
                </div>
            }

            <Footer/>
        </div>
    );
}

export default App;