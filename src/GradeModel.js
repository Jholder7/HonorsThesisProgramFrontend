import React, {useEffect, useState} from "react";
import './SettingsModal.css'
import './GradeModal.css'
import App from "./App";
import OptionTabs from "./OptionComponents/OptionTabs";
import ToolPanel from "./ToolPanel";
import {useLocalStorage} from "@uidotdev/usehooks";

const GradeModel = ({ setIsOpen }) => {
    const [bracketGradeOptions, setBracketGradeOptions] = useLocalStorage("BGO",[]);
    const [spaceGradeOptions, setSpaceGradeOptions] = useLocalStorage("SGO",[]);
    const [tabGradeOptions, setTabGradeOptions] = useLocalStorage("TGO",[]);
    const [newlineGradeOptions, setNewlineGradeOptions] = useLocalStorage("LGO",[]);

    let bracketD = React.createRef();
    let bracketT = React.createRef();
    let bracketW = React.createRef();
    let spaceD = React.createRef();
    let spaceT = React.createRef();
    let spaceW = React.createRef();
    let tabD = React.createRef();
    let tabT = React.createRef();
    let tabW = React.createRef();
    let newlineD = React.createRef();
    let newlineT = React.createRef();
    let newlineW = React.createRef();

    useEffect(() => {
        bracketD.current.value = bracketGradeOptions[0];
        bracketT.current.value = bracketGradeOptions[1];
        bracketW.current.value = bracketGradeOptions[2];
        spaceD.current.value = spaceGradeOptions[0];
        spaceT.current.value = spaceGradeOptions[1];
        spaceW.current.value = spaceGradeOptions[2];
        tabD.current.value = tabGradeOptions[0];
        tabT.current.value = tabGradeOptions[1];
        tabW.current.value = tabGradeOptions[2];
        newlineD.current.value = newlineGradeOptions[0];
        newlineT.current.value = newlineGradeOptions[1];
        newlineW.current.value = newlineGradeOptions[2];
    }, [bracketGradeOptions, spaceGradeOptions, tabGradeOptions, newlineGradeOptions, bracketD, bracketT, bracketW, spaceD, spaceT, spaceW, tabD, tabT, tabW, newlineD, newlineT, newlineW]);

    function updateGradeSettings() {
        setBracketGradeOptions([parseInt(bracketD.current.value), parseInt(bracketT.current.value), parseInt(bracketW.current.value)]);
        setSpaceGradeOptions([parseInt(spaceD.current.value), parseInt(spaceT.current.value), parseInt(spaceW.current.value)]);
        setTabGradeOptions([parseInt(tabD.current.value), parseInt(tabT.current.value), parseInt(tabW.current.value)]);
        setNewlineGradeOptions([parseInt(newlineD.current.value), parseInt(newlineT.current.value), parseInt(newlineW.current.value)]);
    }

    return (
        <div className="grayOutPane">
            <header>
                <link rel="stylesheet" href="SettingsModal.css" />
                <link rel="stylesheet" href="GradeModal.css" />
            </header>
            <div className="settingsFrame">
                <section className="settingsManu">
                    <div className="titleBar">
                        <h3 className="title">Grade Options</h3>
                        <button className="exitButton" onClick={() =>{ToolPanel.evalTextUpdate(); App.setGradeIsOpen(false); updateGradeSettings();}}>✖</button>
                    </div>
                    <section className="gradeOptions">
                        <div className="optionLine">
                            <h1 style={{"margin-left": "240px"}} className="columnTitle">Point Deduction</h1>
                            <h1 className="columnTitle">Point Total</h1>
                            <h1 className="columnTitle">Weight</h1>
                        </div>
                        <div className="optionLine">
                            <h3 className="rowTitle">Bracket Grade:</h3>
                            <input ref={bracketD} className="optionInput" type="test" name="bracketD" />
                            <input ref={bracketT} className="optionInput" type="test" name="bracketT" />
                            <input ref={bracketW} className="optionInput" type="test" name="bracketW" />
                        </div>
                        <div className="optionLine">
                            <h3 className="rowTitle">Space Grade:</h3>
                            <input ref={spaceD} className="optionInput" type="test" name="spaceD" />
                            <input ref={spaceT} className="optionInput" type="test" name="spaceT" />
                            <input ref={spaceW} className="optionInput" type="test" name="spaceW" />
                        </div>
                        <div className="optionLine">
                            <h3 className="rowTitle">Tab Grade:</h3>
                            <input ref={tabD} className="optionInput" type="test" name="tabD" />
                            <input ref={tabT} className="optionInput" type="test" name="tabT" />
                            <input ref={tabW} className="optionInput" type="test" name="tabW" />
                        </div>
                        <div className="optionLine">
                            <h3 className="rowTitle">Newline Grade:</h3>
                            <input ref={newlineD} className="optionInput" type="test" name="newlineD" />
                            <input ref={newlineT} className="optionInput" type="test" name="newlineT" />
                            <input ref={newlineW} className="optionInput" type="test" name="newlineW" />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}
export default GradeModel;