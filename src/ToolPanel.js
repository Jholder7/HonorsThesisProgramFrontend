import "./ToolPanel.css"
import React, {useState} from "react";
import StyleErrors from "./StatBoxes/StyleErrors";
import ETCR from "./StatBoxes/ETCR";
import CommentCount from "./StatBoxes/CommentCount";
import EvalButton from "./EvalButton";

function ToolPanel() {

    function setStyleErrors(count) {
    }
    ToolPanel.setStuleErrors = setStyleErrors;

    function executeEval() {

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
                <EvalButton callback={() =>{StyleErrors.setValue("test")}}/>
            </section>
        </div>
    );
}

export default ToolPanel;