

export function Panier(props) {


    const {titre, prix, description} = props.panier
    return (
        <>
        <h3>Titre : {titre}</h3>
        <p>prix : {prix}</p>
        <p>description : {description}</p>
        </>
    )
}