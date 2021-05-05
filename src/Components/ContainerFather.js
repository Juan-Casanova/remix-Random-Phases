import Text from './Text'
import Button from './Button'

import {useState} from 'react'

import Data from '../quotes.json'


const ContainerFather = () => {

    var colorsHex = ["#FF0000","#00FF00","#0000FF","#7737ea","#fd37ea","#2af1db"]
    var classBack = document.getElementById("App");

    const [color, setColor] = useState('#000000')
    const [phase, setPhase] = useState(Data.quotes[1].quote);
    const [auth, setAuth] = useState (Data.quotes[1].author)

    const generateHex = () => {
        var numberRandom = Math.floor(Math.random()*6)
        setColor(colorsHex[numberRandom])
    }
    
    const changePhrase = () => {

        changeColor()
        
        var numberRandom = Math.floor(Math.random() * 102);

        var phase1 = Data.quotes[numberRandom].quote
        var auth1 = Data.quotes[numberRandom].author

        setPhase(phase1)
        setAuth(auth1)
    
    }

    const changeColor = () => {
        generateHex()
        classBack.setAttribute("style",`background-color:${color}`)
    }

    return (
        <div id="container-Father">
            <Text phase={phase} auth = {auth}/>
            <Button fun={changePhrase} phase={phase} auth = {auth}/>
        </div>
    )
}

export default ContainerFather