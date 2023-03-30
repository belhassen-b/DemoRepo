import Adresse from "./Adresse";

export function Client(props){
    const {nom, prenom, telephone ,statut, adresse} = props.monclient;
    return(
        <div>
            Nom : {nom}, Prénom : {prenom}, Télephone : {telephone}
            <Adresse adresse={adresse}></Adresse>
            <span className={statut ? 'green' : 'red'}>Statut : {statut ? 'actif' : 'non actif'}</span>
        </div>
    )
}