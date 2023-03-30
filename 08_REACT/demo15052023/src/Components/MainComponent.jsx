import {useState} from "react";


const MainComponent = (props) => {
const [maValeur, setMaValeur] = useState(+props.maValeur)
const [monTexte, setMonTexte] = useState("")
    const [compA, setCompA] = useState(true)

    console.log(typeof maValeur)
    const onInputChange = (e) => {
        setMaValeur(e.target.value)
    }
    const onInputTextChange = (e) => {
        // setMonTexte(previousState => previousState + " " + e.target.value)
        setMonTexte(() =>
        {
            return  e.target.value
        })
    }

    return (
        <>
            <div>
            <input type="number" value={maValeur} onChange={onInputChange}/>
    <span>
        ma valeur est {maValeur}
    </span>
            </div>
            <input type="text" value={monTexte} onInput={onInputTextChange}/>
            <span>  mon texte est {monTexte}</span>
            <div>
                <button onClick={() => setCompAVisible(!compAVisible) }> Toggle</button>
            </div>
        </>
    )
}
export default MainComponent