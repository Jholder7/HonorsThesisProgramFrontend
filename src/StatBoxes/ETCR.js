import React, {useState} from "react";
import "./StatBox.css"

function ETCR(props) {

    let [value, setValue] = useState(props.value);
    ETCR.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}%</h1>
            <h3 className="statBoxTitle">ECP</h3>
        </div>
    );
}

export default ETCR;