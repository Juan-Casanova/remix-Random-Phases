import React from 'react';

const Button = (props) => {

    var url = `https://twitter.com/intent/tweet?text=${props.phase}-${props.auth}` 

    return(
        <div id="containerButton">
            <a href = {url}>
                <img id="icon" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="fallando papu"/>
            </a>
            <button class="buttonStyle" onClick ={ () => props.fun() }> 
                New Quote 
            </button>
        </div>
    )
}

export default Button