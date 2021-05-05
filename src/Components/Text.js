import React from 'react'

const Text = (props) => {

    //window.onload = props.funChangeColor()

    return (
        <div>
            <p>
               {props.phase}
            </p>
            <p>
                {props.auth}
            </p>            
        </div>
    )
}

export default Text