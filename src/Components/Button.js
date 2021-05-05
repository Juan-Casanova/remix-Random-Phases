const Button = (props) => {
    return(
        <>
            <button>
            
            </button>
            <button onClick ={ () => props.fun() }> 
                New Quote 
            </button>
        </>
    )
}

export default Button