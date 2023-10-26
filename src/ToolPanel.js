import "./ToolPanel.css"
import React, {useState} from "react";
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

function ToolPanel() {
    const [errors, setErrors] = useState([])
    const [settings, saveSettings] = useLocalStorage("settings", [])

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
            settings: settings
        }
        let orig = SourceCodeViewer.getSourceCode()
        // console.log(OptionTabs.settings)
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
                data.issueSegmentLiterals.forEach((segmentLiteral) => {
                    let newSegLit = {"id": id, "preText": segmentLiteral.segmentLiteralData[0], "postText": segmentLiteral.segmentLiteralData[1], "deduction": parseFloat(segmentLiteral.segmentLiteralData[2])};
                    setErrors(prevState => [...prevState, newSegLit]);
                    id++;
                });
            });
    }

    return (
        <div className="rightSideToolPanel">
            <header>
                <link type="text/css" rel="stylesheet" href="ToolPanel.css" />
            </header>
            <section className="topQuickToolStats">
                <StyleErrors value="--"/>
                <ETCR value="--%"/>
                <CommentCount value="--"/>
            </section>
            <section className="errorSection">
                {errors.map(error => (
                    <ErrorCard title={"Error " + error.id} preText={error.preText} postText={error.postText} deduction={error.deduction}/>
                ))}
            </section>
            <section className="topQuickToolStats" style={{"margin-top": "auto"}}>
                <EvalButton title="Grade Options" callback={() => {}}/>
                <EvalButton title="Style Options" callback={() =>{App.setSettingsIsOpen(true)}}/>
            </section>
        </div>
    );
}

export default ToolPanel;