import React, {useState} from "react";
import "./ToggleButton.css"
import "./atom-one-dark.css"
import Highlight from 'react-highlight'

function ToggleButton (props) {
    const [isSelected, setSelected] = useState(props.initialState);


    return (
        <button onClick={() => {setSelected(!isSelected)}} className="toggleButton">
            <header>
                <link rel="stylesheet" href="ToggleButton.css" />
                <link rel="stylesheet" href="atom-one-dark.css"/>
            </header>
            <div className="toggleButtonTop">
                <h3 className="toggleTitle">{props.title}</h3>
                <div className={`toggleBacking ${isSelected ? 'backingTicked' : ''}`}>
                    <div className={`toggleTicker ${isSelected ? 'tickerTicked' : ''}`}></div>
                </div>
            </div>
            <Highlight className={"codePreview " + props.language}>
                {props.preview}
            </Highlight>
        </button>
    );
}

export default ToggleButton;