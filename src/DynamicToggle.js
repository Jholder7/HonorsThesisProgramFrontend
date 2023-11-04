import React, {useEffect, useState} from "react";
import "./DynamicToggle.css"
import Highlight from 'react-highlight'

function DynamicToggle (props) {
    const [isSelected, setSelected] = useState(false);
    DynamicToggle.isSelected = isSelected;

    return (
        <button onClick={() => {setSelected(!isSelected); if (props.onClick != null) props.onClick();}} className={`dynamicToggleButton ${isSelected ? 'dynamicErrorCardSelect' : ''}`}>
            <header>
                <link rel="stylesheet" href="DynamicToggle.css" />
            </header>
            <h className="dynamicTitle">Dynamic Style Evaluation (Beta)</h>
            <div className="dynamicToggleButtonTop">
                <div className={`dynamicToggleBacking ${isSelected ? 'dynamicBackingTicked' : ''}`}>
                    <div className={`dynamicToggleTicker ${isSelected ? 'dynamicTickerTicked' : ''}`}></div>
                </div>
            </div>
        </button>
    );
}

export default DynamicToggle;