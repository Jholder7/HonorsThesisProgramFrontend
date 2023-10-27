import React, {useState} from "react";
import "./StatBox.css"

function UWGrade(props) {

    let [value, setValue] = useState(props.value);
    UWGrade.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}</h1>
            <h3 className="statBoxTitle">UW Grade</h3>
        </div>
    );
}

export default UWGrade;