import "./EvalButton.css"
import React, {useCallback} from "react";

function EvalButton(props) {

    let [callback, setCallback] = useCallback([props.callback])

    return(
        <button onClick={callback} className="evalButton">
            <header>
                <link rel="stylesheet" href="EvalButton.css" />
            </header>
            Compute
        </button>
    );
}

export default EvalButton;