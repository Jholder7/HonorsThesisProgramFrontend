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
        let validatedBracketD = (!isNaN(bracketD.current.value) && parseFloat(bracketD.current.value) >= 0) ? parseFloat(bracketD.current.value) : 0
        let validatedBracketT = (!isNaN(bracketT.current.value) && parseFloat(bracketT.current.value) >= 0) ? parseFloat(bracketT.current.value) : 0
        let validatedBracketW = (!isNaN(bracketW.current.value) && parseFloat(bracketW.current.value) >= 0) ? parseFloat(bracketW.current.value) : 0
        setBracketGradeOptions([validatedBracketD, validatedBracketT, validatedBracketW]);

        let validatedSpaceD = (!isNaN(spaceD.current.value) && parseFloat(spaceD.current.value) >= 0) ? parseFloat(spaceD.current.value) : 0
        let validatedSpaceT = (!isNaN(spaceT.current.value) && parseFloat(spaceT.current.value) >= 0) ? parseFloat(spaceT.current.value) : 0
        let validatedSpaceW = (!isNaN(spaceW.current.value) && parseFloat(spaceW.current.value) >= 0) ? parseFloat(spaceW.current.value) : 0
        setSpaceGradeOptions([validatedSpaceD, validatedSpaceT, validatedSpaceW]);

        let validatedTabD = (!isNaN(tabD.current.value) && parseFloat(tabD.current.value) >= 0) ? parseFloat(tabD.current.value) : 0
        let validatedTabT = (!isNaN(tabT.current.value) && parseFloat(tabT.current.value) >= 0) ? parseFloat(tabT.current.value) : 0
        let validatedTabW = (!isNaN(tabW.current.value) && parseFloat(tabW.current.value) >= 0) ? parseFloat(tabW.current.value) : 0
        setTabGradeOptions([validatedTabD, validatedTabT, validatedTabW]);

        let validatedNewlineD = (!isNaN(newlineD.current.value) && parseFloat(newlineD.current.value) >= 0) ? parseFloat(newlineD.current.value) : 0
        let validatedNewlineT = (!isNaN(newlineT.current.value) && parseFloat(newlineT.current.value) >= 0) ? parseFloat(newlineT.current.value) : 0
        let validatedNewlineW = (!isNaN(newlineW.current.value) && parseFloat(newlineW.current.value) >= 0) ? parseFloat(newlineW.current.value) : 0
        setNewlineGradeOptions([validatedNewlineD, validatedNewlineT, validatedNewlineW]);

        ToolPanel.evalTextUpdate();
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
                        <button className="exitButton" onClick={() =>{updateGradeSettings(); App.setGradeIsOpen(false);}}>✖</button>
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