import "./ToolPanel.css"
import React from "react";
import StyleErrors from "./StatBoxes/StyleErrors";
import ETCR from "./StatBoxes/ETCR";
import CommentCount from "./StatBoxes/CommentCount";

function ToolPanel() {
    function setStyleErrors(count) {
    }
    ToolPanel.setStuleErrors = setStyleErrors;

    return (
        <div className="rightSideToolPanel">
            <header>
                <link rel="stylesheet" href="ToolPanel.css" />
            </header>
            <section className="topQuickToolStats">
                <StyleErrors value="5"/>
                <ETCR value="12%"/>
                <CommentCount value="12"/>
            </section>
            <button onClick={() =>{StyleErrors.setValue("test")}}>Test</button>
        </div>
    );
}

export default ToolPanel;