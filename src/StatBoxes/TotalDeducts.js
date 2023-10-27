import React, {useState} from "react";
import "./StatBox.css"

function TotalDeducts(props) {

    let [value, setValue] = useState(props.value);
    TotalDeducts.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">-{value}</h1>
            <h3 className="statBoxTitle">Total Deduct</h3>
        </div>
    );
}

export default TotalDeducts;