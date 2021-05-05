import Text from './Text'
import Button from './Button'

import {useState} from 'react'

import Data from '../quotes.json'


const ContainerFather = () => {

    var colorsHex = ["#FF0000","#00FF00","#0000FF","#7737ea","#fd37ea","#2af1db"]
  

    const [color, setColor] = useState('#000000')

    const generateHex = () => {
        var numberRandom = Math.floor(Math.random()*6)
        setColor(colorsHex[numberRandom])
    }


    const [phase, setPhase] = useState(Data.quotes[1].quote);
    const [auth, setAuth] = useState (Data.quotes[1].author)
    
    const changePhrase = () => {
        
        var numberRandom = Math.floor(Math.random() * 102);

        var phase1 = Data.quotes[numberRandom].quote
        var auth1 = Data.quotes[numberRandom].author

        setPhase(phase1)
        setAuth(auth1)
    
    }

    return (
        <div id="container-Father">
            <Text phase={phase} auth = {auth} funChangeColor = {changePhrase} />
            <Button fun={changePhrase} />
        </div>
    )
}

export default ContainerFather