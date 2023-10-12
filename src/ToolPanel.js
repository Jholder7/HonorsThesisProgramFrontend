import "./ToolPanel.css"
import React, {useState} from "react";
import StyleErrors from "./StatBoxes/StyleErrors";
import ETCR from "./StatBoxes/ETCR";
import CommentCount from "./StatBoxes/CommentCount";
import EvalButton from "./EvalButton";
import SourceCodeViewer from "./SourceCodeViewer";
import App from "./App";
import styleErrors from "./StatBoxes/StyleErrors";

function ToolPanel() {

    function setStyleErrors(count) {
    }
    ToolPanel.setStuleErrors = setStyleErrors;

    function executeEval() {
        console.log("request sent")
        SourceCodeViewer.setMarkers([]);

        const req =  {
            fileTitle: SourceCodeViewer.getFileTitle(),
            fileContents: SourceCodeViewer.getSourceCode().replaceAll("\r", "").replaceAll("\"", "\u0022")
        }
        let orig = SourceCodeViewer.getSourceCode()
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
                    SourceCodeViewer.newMarker(x, y, x, y1+1);
                    console.log(x, y, x, y1+1);
                });
            });
    }

    return (
        <div className="rightSideToolPanel">
            <header>
                <link type="text/css" rel="stylesheet" href="ToolPanel.css" />
            </header>
            <section className="topQuickToolStats">
                <StyleErrors value="5"/>
                <ETCR value="12%"/>
                <CommentCount value="12"/>
            </section>
            <button onClick={() =>{StyleErrors.setValue("test")}}>Test</button>
            <section className="topQuickToolStats" style={{"margin-top": "auto", "margin-bottom": "25px"}}>
                <EvalButton callback={() =>{executeEval()}}/>
            </section>
        </div>
    );
}

export default ToolPanel;