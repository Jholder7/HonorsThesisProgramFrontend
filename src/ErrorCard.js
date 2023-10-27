import React, {useState} from "react";
import "./ErrorCard.css"

function ErrorCard(props) {

    const [isSelected, setSelected] = useState(true);

    function selected() {
        return isSelected;
    }
    ErrorCard.selected = selected;

    return (
        <div onClick={() => {setSelected(!isSelected)}} className={`errorCard ${isSelected ? 'errorCardSelect' : ''}`}>
            <header>
                <link type="text/css" rel="stylesheet" href="ErrorCard.css" />
            </header>
            <div className="errorTitle">
                <h>{props.title}</h>
                {/*<div className={`errorToggleBacking ${isSelected ? 'errorBackingTicked' : ''}`}>*/}
                {/*    <div className={`errorToggleTicker ${isSelected ? 'errorTickerTicked' : ''}`}></div>*/}
                {/*</div>*/}
            </div>
            <div className="errorComparison">
                <div className="errorCompBox">
                    <p className="errorCompBoxText">{props.preText}</p>
                </div>
                <svg style={{"margin": "-15px"}} fill={`${isSelected ? '#7e7e7e' : '#525256'}`} width="60px" height="60px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z" fill-rule="nonzero"/></svg>
                <div className="errorCompBox">
                    <p className="errorCompBoxText">{props.postText}</p>
                </div>
                <div className="errorDeduction">
                    <h className="errorDeductionAmount">-{props.deduction}</h>
                    <h className="errorDeductionTitle">Deduction</h>
                </div>
            </div>
        </div>
    )
}

export default ErrorCard