import React, {useState} from "react";
import "./StatBox.css"

function StyleErrors(props) {

    let [value, setValue] = useState(props.value);
    StyleErrors.setValue = setValue;


    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}</h1>
            <h3 className="statBoxTitle">Style Errors</h3>
        </div>
    );
}

export default StyleErrors;