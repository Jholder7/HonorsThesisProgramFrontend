import React, {useState} from "react";
import "./StatBox.css"

function StatBox(props) {

    let [value, setValue] = useState(props.value);
    StatBox.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}</h1>
            <h3 className="statBoxTitle">{props.title}</h3>
        </div>
    );
}

export default StatBox;