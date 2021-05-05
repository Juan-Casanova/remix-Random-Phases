import React from 'react'

const Text = (props) => {

    //window.onload = props.funChangeColor()

    return (
        <div id="containerText">
            <p id="textPhase">
               {props.phase}
            </p>
            <p id="textAuth">
                {props.auth}
            </p>            
        </div>
    )
}

export default Text