import './SourceCodeViewer.css'
import AceEditor from "react-ace";
import React, {useState} from "react";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

function SourceCodeViewer() {

    let [lineCount, setLineCount] = useState(0)
    let [editorText, setEditorText] = useState("");
    let [markers, setMarkers] = useState([]);
    let [fileTitle, setFileTitle] = useState("FileName.java")


    function updateEditorInfo (newValue) {
        let lines = newValue.split('\n');
        setLineCount(lines.length);
        setEditorText(newValue);
    }
    SourceCodeViewer.setViewerText = setViewerText;

    function setViewerText(text) {
        setEditorText(text);
    }
    SourceCodeViewer.setViewerText = setViewerText;

    function newMarker(row, column, row1, column1){
        setMarkers([...markers, {id: 0, startRow: row, startCol: column, endRow: row1, endCol: column1, className: 'textHighlight', type: 'background' }]);
    }
    SourceCodeViewer.newMarker = newMarker;

    SourceCodeViewer.setFileTitle = setFileTitle;

    return (
        <div className="sourceCodeViewer">
            <header>
                <link rel="stylesheet" href="SourceCodeViewer.css" />
            </header>
            <div className="sourceCodeFileHeader">
                <h1 className="sourceCodeFileHeaderTitle">./<span className="sourceCodeFileHeaderName">{fileTitle}</span></h1>
                <h1 className="sourceCodeFileHeaderInfo sourceCodeFileHeaderInfoSpacer">UTF-8</h1>
                <h1 id="lineCount" className="sourceCodeFileHeaderInfo">{lineCount} Lines</h1>
            </div>
            <AceEditor
                style={{"border-radius": "0 0 5px 5px", "background": "none"}}
                value={editorText}
                markers={markers}
                className="sourceCodePre"
                mode="java"
                theme="one_dark"
                onChange={updateEditorInfo}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    printMargin: false
                }}
            />
        </div>
    );
}

export default SourceCodeViewer;