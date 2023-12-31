import './SourceCodeViewer.css'
import AceEditor from "react-ace";
import React, {useState} from "react";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import ToolPanel from "./ToolPanel";

function SourceCodeViewer() {

    let [lineCount, setLineCount] = useState(0)
    let [editorText, setEditorText] = useState("");
    let [markers, setMarkers] = useState([]);
    let [fileTitle, setFileTitle] = useState("FileName.java")
    let [status, setStatus] = useState("Waiting...")
    let [computeTime, setComputeTime] = useState("0ms")
    SourceCodeViewer.setStatus = setStatus;
    SourceCodeViewer.setMarkers = setMarkers;
    SourceCodeViewer.setComputeTime = setComputeTime;

    //TODO: Add count down timer from last edit and if no changes within 10 seconds re execute eval
    let OldValue = "-1";
    function updateEditorInfo (newValue) {
        //TODO: Clear style issues on clear
        if (newValue !== OldValue) {
            SourceCodeViewer.setMarkers([]);
            let lines = newValue.split('\n');
            setLineCount(lines.length);
            setEditorText(newValue);
            ToolPanel.evalTextUpdate();
        }
    }
    SourceCodeViewer.setViewerText = setViewerText;

    function setViewerText(text) {
        setEditorText(text);
    }
    SourceCodeViewer.setViewerText = setViewerText;

    let ID = 0
    function newMarker(row, column, row1, column1){
        // console.log(markers);
        ID++;
        setMarkers(prevState => [...prevState, {id: ID, startRow: row, startCol: column, endRow: row1, endCol: column1, className: 'textHighlight', type: 'text' }])
        // setMarkers([...markers, {id: ID, startRow: row, startCol: column, endRow: row1, endCol: column1, className: 'textHighlight', type: 'text' }]);
    }
    SourceCodeViewer.newMarker = newMarker;

    SourceCodeViewer.setFileTitle = setFileTitle;

    function getSourceCode(){
        return editorText;
    }
    SourceCodeViewer.getSourceCode = getSourceCode;

    function getFileTitle() {
        return fileTitle;
    }
    SourceCodeViewer.getFileTitle = getFileTitle;

    const drop = React.useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const {files} = e.dataTransfer;

        if (files && files.length) {
            let reader = new FileReader();
            reader.onload = function (event) {
                updateEditorInfo(event.target.result);
                setFileTitle(files[0].name);
            };
            reader.readAsText(files[0]);
        }
    };

    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);

        return () => {
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (
        <div ref={drop} className="sourceCodeViewer">
            <header>
                <link rel="stylesheet" href="SourceCodeViewer.css" />
            </header>
            <div className="sourceCodeFileHeader">
                <h1 className="sourceCodeFileHeaderTitle">./<span className="sourceCodeFileHeaderName">{fileTitle}</span></h1>
                <h1 className="sourceCodeFileHeaderInfo sourceCodeFileHeaderInfoSpacer">{status}</h1>
                <h1 className="sourceCodeFileHeaderInfo" style={{"margin-right": "15px"}}>{computeTime}</h1>
                <h1 className="sourceCodeFileHeaderInfo" style={{"margin-right": "15px"}}>UTF-8</h1>
                <h1 id="lineCount" className="sourceCodeFileHeaderInfo">{lineCount} Lines</h1>
            </div>
            <AceEditor
                style={{"border-radius": "0 0 5px 5px", "background": "none"}}
                value={editorText}
                markers={markers}
                className="sourceCodePre"
                mode="java"
                theme="one_dark"
                placeholder="Type a program here or drag and drop a file here to upload!"
                onChange={updateEditorInfo}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    printMargin: false,
                    useSoftTabs: false
                }}
            />
        </div>
    );
}

export default SourceCodeViewer;