import React, {useState} from "react";
import "./StatBox.css"

function CommentCount(props) {

    let [value, setValue] = useState(props.value);
    CommentCount.setValue = setValue;

    return (
        <div className="statBox">
            <h1 className="statBoxNumber">{value}</h1>
            <h3 className="statBoxTitle">Comment Count</h3>
        </div>
    );
}

export default CommentCount;