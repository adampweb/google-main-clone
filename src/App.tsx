import React, { useState } from "react";
import Header from "./components/header";
import MainTab from "./components/main/tabs/MainTab";
import ImagesTab from "./components/main/tabs/ImagesTab";

const App = () => {
    const [isShownMainTab, setIsShownMainTab] = useState(true);
    const [isShownImagesTab, setIsShownImagesTab] = useState(false);

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

    return (
        <div className="App" id={"gb-main"}>
            <Header mainTabFn={{showMainTab}} imgTabFn={{showImagesTab}} tabStates={{mainTabState: isShownMainTab, imgTabState: isShownImagesTab}}/>
            {isShownMainTab && <MainTab style={{display: isShownMainTab ? 'block' : 'none' }}/>}
            {isShownImagesTab && <ImagesTab style={{display: isShownImagesTab ? 'block' : 'none' }}/>}
        </div>
    );
}

export default App;