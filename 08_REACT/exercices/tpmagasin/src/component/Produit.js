

export function Produit(props) {
const clickButton = () => {
   // console.log("clique bouton")
   // console.log(props.produit.id)
    // appelle fonction parent
    props.addProduitPanier(props.produit.id)
}
    const {titre, prix, description} = props.produit
    return (
        <>
        <h3>Titre : {titre}</h3>
        <p>prix : {prix}</p>
        <p>description : {description}</p>
        <button onClick={clickButton} className={"btn btn-success"}>Ajouter Panier</button>
        </>
    )
}