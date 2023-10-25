import "./ToolPanel.css"
import React, {useState} from "react";
import StyleErrors from "./StatBoxes/StyleErrors";
import ETCR from "./StatBoxes/ETCR";
import CommentCount from "./StatBoxes/CommentCount";
import EvalButton from "./EvalButton";
import SourceCodeViewer from "./SourceCodeViewer";
import App from "./App";
import OptionTabs from "./OptionComponents/OptionTabs";
import "./resources/arrow.svg"

function ToolPanel() {

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
            settings: OptionTabs.settings
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
                console.log(data)
                data.issueSegments.forEach((segment) => {
                    let source = SourceCodeViewer.getSourceCode().replaceAll("\r", "").replaceAll("\"", "\u0022")
                    let x = source.slice(0, segment.segmentData[0]).split("\n").length-1;
                    let y = source.slice(0, segment.segmentData[0]).split("\n").slice(-1)[0].length;
                    let x1 = source.slice(0, segment.segmentData[1]).split("\n").length-1;
                    let y1 = source.slice(0, segment.segmentData[1]).split("\n").slice(-1)[0].length;
                    SourceCodeViewer.newMarker(x, y, x1, y1+1);
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
                <div className="errorCard">
                    <div className="errorTitle">
                        <h>Error #1</h>
                        <button>Toggle</button>
                    </div>
                    <div className="errorComparison">
                        <div className="errorCompBox">
                            <p className="errorCompBoxText">This</p>
                        </div>
                        <svg style={{"margin": "-15px"}} fill="#40424b" width="60px" height="60px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fill-rule="nonzero"/></svg>
                        <div className="errorCompBox">
                            <p className="errorCompBoxText">To This</p>
                        </div>
                        <div className="errorDeduction">
                            <h className="errorDeductionAmount">-1</h>
                            <h className="errorDeductionTitle">Deduction</h>
                        </div>
                    </div>
                </div>
                <div className="errorCard">
                    <div className="errorTitle">
                        <h>Error #1</h>
                        <button>Toggle</button>
                    </div>
                    <div className="errorComparison">
                        <div className="errorCompBox">
                            <p className="errorCompBoxText">This</p>
                        </div>
                        <svg style={{"margin": "-15px"}} fill="#40424b" width="60px" height="60px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fill-rule="nonzero"/></svg>
                        <div className="errorCompBox">
                            <p className="errorCompBoxText">To This</p>
                        </div>
                        <div className="errorDeduction">
                            <h className="errorDeductionAmount">-1</h>
                            <h className="errorDeductionTitle">Deduction</h>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topQuickToolStats" style={{"margin-top": "auto"}}>
                <EvalButton title="Grade Options" callback={() => {}}/>
                <EvalButton title="Style Options" callback={() =>{App.setSettingsIsOpen(true)}}/>
            </section>
        </div>
    );
}

export default ToolPanel;