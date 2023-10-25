import React, {useState} from "react";
import './SettingsModal.css'
import App from "./App";
import OptionTabs from "./OptionComponents/OptionTabs";
import ToolPanel from "./ToolPanel";

const SettingsModal = ({ setIsOpen }) => {
    return (
        <div className="grayOutPane">
            <header>
                <link rel="stylesheet" href="SettingsModal.css" />
            </header>
            <div className="settingsFrame">
                <section className="settingsManu">
                    <div className="titleBar">
                        <h3 className="title">Style Options</h3>
                        <button className="exitButton" onClick={() =>{ToolPanel.evalTextUpdate(); App.setSettingsIsOpen(false)}}>✖</button>
                    </div>
                    <OptionTabs />
                </section>
            </div>
        </div>
    );
}
export default SettingsModal;