const Button = (props) => {
    return(
        <div id="containerButton">
            <a href = "https://www.google.com">
                <img id="icon" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"/>
            </a>
            <button class="buttonStyle" onClick ={ () => props.fun() }> 
                New Quote 
            </button>
        </div>
    )
}

export default Button