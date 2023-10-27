import React, {useState} from "react";
import "./StatBox.css"

function FinalGrade(props) {

    let [value, setValue] = useState(props.value);
    FinalGrade.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}</h1>
            <h3 className="statBoxTitle">Final Grade</h3>
        </div>
    );
}

export default FinalGrade;