import "./ToolPanel.css"
import React, {createRef, useState} from "react";
import StyleErrors from "./StatBoxes/StyleErrors";
import ETCR from "./StatBoxes/ETCR";
import CommentCount from "./StatBoxes/CommentCount";
import EvalButton from "./EvalButton";
import SourceCodeViewer from "./SourceCodeViewer";
import App from "./App";
import OptionTabs from "./OptionComponents/OptionTabs";
import ErrorCard from "./ErrorCard"
import "./resources/arrow.svg"
import {useLocalStorage} from "@uidotdev/usehooks";
import FinalGrade from "./StatBoxes/FinalGrade";
import UWGrade from "./StatBoxes/UWGrade";
import TotalDeducts from "./StatBoxes/TotalDeducts";
import GradeModel from "./GradeModel";
import DynamicToggle from "./DynamicToggle";

function ToolPanel() {
    const [errors, setErrors] = useState([])
    const [settings, saveSettings] = useLocalStorage("settings", [])
    const [excludes, setExcludes] = useState([])
    ToolPanel.setExcludes = setExcludes;
    const [recalcErrors, setRecalcErrors] = useState([]);

    const [bracketGradeOptions, setBracketGradeOptions] = useLocalStorage("BGO",[1, 10, 25]);
    const [spaceGradeOptions, setSpaceGradeOptions] = useLocalStorage("SGO",[1, 10, 25]);
    const [tabGradeOptions, setTabGradeOptions] = useLocalStorage("TGO",[1, 10, 25]);
    const [newlineGradeOptions, setNewlineGradeOptions] = useLocalStorage("LGO",[1, 10, 25]);

    function setStyleErrors(count) {
    }
    ToolPanel.setStuleErrors = setStyleErrors;

    let timer = null;
    function evalTextUpdate() {
        SourceCodeViewer.setStatus("Evaluating...")
        if (timer == null) {
            timer = setTimeout(() =>{executeEval(); SourceCodeViewer.setStatus("Complete")}, 1000);
        } else {
            clearTimeout(timer)
            timer = setTimeout(() =>{executeEval(); SourceCodeViewer.setStatus("Complete")}, 1000);
        }
    }
    ToolPanel.evalTextUpdate = evalTextUpdate;

    function executeEval() {
        SourceCodeViewer.setMarkers([]);

        const req =  {
            fileTitle: SourceCodeViewer.getFileTitle(),
            fileContents: SourceCodeViewer.getSourceCode().replaceAll("\r", "").replaceAll("\"", "\u0022"),
            settings: DynamicToggle.isSelected ? ["true"] : settings
        }
        let orig = SourceCodeViewer.getSourceCode()
        // console.log(OptionTabs.settings)
        const start = performance.now()
        fetch(App.getApiBaseAddress()+"/api-v1/baseService/evalFile", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
            .then(response => response.json())
            .then(data => {
                StyleErrors.setValue(data.styleErrors)
                ETCR.setValue(data.ETCR)
                CommentCount.setValue(data.CommentCount)
                if (data.issueSegments == null) {
                    return null;
                }
                data.issueSegments.forEach((segment) => {
                    let source = SourceCodeViewer.getSourceCode().replaceAll("\r", "").replaceAll("\"", "\u0022")
                    let x = source.slice(0, segment.segmentData[0]).split("\n").length-1;
                    let y = source.slice(0, segment.segmentData[0]).split("\n").slice(-1)[0].length;
                    let x1 = source.slice(0, segment.segmentData[1]).split("\n").length-1;
                    let y1 = source.slice(0, segment.segmentData[1]).split("\n").slice(-1)[0].length;
                    SourceCodeViewer.newMarker(x, y, x1, y1+1);
                });
                let id = 1;
                setErrors([]);
                let deductArr = []
                data.issueSegmentLiterals.forEach((segmentLiteral) => {
                    let newSegLit = {"id": id, "preText": segmentLiteral.segmentLiteralData[0], "postText": segmentLiteral.segmentLiteralData[1], "deduction": getCardGrade(segmentLiteral.segmentLiteralData[2])};
                    deductArr.push(segmentLiteral.segmentLiteralData[2])
                    setErrors(prevState => [...prevState, newSegLit]);
                    id++;
                });
                calculateGrade(deductArr);
                setRecalcErrors(deductArr);
                const end = performance.now()
                SourceCodeViewer.setComputeTime(`${end - start}ms`);
            });
    }

    function CardRegrade(){
        let newDeductArr = []
        for (let i = 0; i < recalcErrors.length; i++){
            if (!excludes.includes((i+1).toString())) {
                newDeductArr.push(recalcErrors[i]);
            }
        }
        calculateGrade(newDeductArr)
    }

    ToolPanel.CardRegrade = CardRegrade;

        function getCardGrade(deductStr) {
        let pointDeduct = 0;
        if (deductStr == null) {return pointDeduct}
        if (deductStr.includes("B")) {
            pointDeduct += bracketGradeOptions[0];
        }
        if (deductStr.includes("S")) {
            pointDeduct += spaceGradeOptions[0];
        }
        if (deductStr.includes("T")) {
            pointDeduct += tabGradeOptions[0];
        }
        if (deductStr.includes("N")) {
            pointDeduct += newlineGradeOptions[0];
        }
        return pointDeduct;
    }

    function calculateGrade(deducts) {
        let bracketDeduct = 0;
        let spaceDeduct = 0;
        let tabDeduct = 0;
        let newlineDeduct = 0;
        deducts.forEach((deductStr) => {
            if (deductStr.includes("B")) {
                bracketDeduct += bracketGradeOptions[0];
            }
            if (deductStr.includes("S")) {
                spaceDeduct += spaceGradeOptions[0];
            }
            if (deductStr.includes("T")) {
                tabDeduct += tabGradeOptions[0];
            }
            if (deductStr.includes("N")) {
                newlineDeduct += newlineGradeOptions[0];
            }
        })
        let bracketGrade = (bracketGradeOptions[1] - bracketDeduct) / bracketGradeOptions[1]*100
        if (bracketGrade < 0) {bracketGrade = 0;}

        let spaceGrade = (spaceGradeOptions[1] - spaceDeduct) / spaceGradeOptions[1]*100
        if (spaceGrade < 0) {spaceGrade = 0;}

        let tabGrade = (tabGradeOptions[1] - tabDeduct) / tabGradeOptions[1]*100
        if (tabGrade < 0) {tabGrade = 0;}

        let newlineGrade = (newlineGradeOptions[1] - newlineDeduct) / newlineGradeOptions[1]*100
        if (newlineGrade < 0) {newlineGrade = 0;}

        let finalGrade = (bracketGrade * bracketGradeOptions[2]/100) + (spaceGrade * spaceGradeOptions[2]/100) + (tabGrade * tabGradeOptions[2]/100) + (newlineGrade * newlineGradeOptions[2]/100);
        FinalGrade.setValue(finalGrade+"%");
        let uwGrade = (bracketGrade+spaceGrade+tabGrade+newlineGrade)/4;
        UWGrade.setValue(uwGrade+"%");
        let totalDeducts = bracketDeduct+spaceDeduct+tabDeduct+newlineDeduct;
        // console.log(totalDeducts);
        TotalDeducts.setValue(totalDeducts);
    }

    return (
        <div className="rightSideToolPanel">
            <header>
                <link type="text/css" rel="stylesheet" href="ToolPanel.css" />
            </header>
            <section className="topQuickToolStats">
                <StyleErrors value="--"/>
                <ETCR value="--"/>
                <CommentCount value="--"/>
            </section>
            <section style={{"margin-top": "-15px"}} className="topQuickToolStats">
                <FinalGrade value="--%"/>
                <UWGrade value="--%"/>
                <TotalDeducts value="--"/>
            </section>
            <section className="errorSection">
                {errors.map(error => (
                    <ErrorCard title={"Style Violation " + error.id} preText={error.preText} postText={error.postText} deduction={error.deduction}/>
                ))}
            </section>
            <section className="topQuickToolStats sectionBreak" style={{"margin-top": "auto"}}>
                <DynamicToggle onClick={() => {
                    ToolPanel.evalTextUpdate();
                }}/>
            </section>
            <section className="topQuickToolStats">
                <EvalButton title="Grade Options" callback={() => {App.setGradeIsOpen(true)}}/>
                <EvalButton title="Style Options" callback={() =>{if(!DynamicToggle.isSelected)App.setSettingsIsOpen(true)}}/>
            </section>
        </div>
    );
}

export default ToolPanel;