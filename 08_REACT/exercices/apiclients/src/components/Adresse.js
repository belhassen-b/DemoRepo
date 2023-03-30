
export function Adresse(props){

        const {city,postCode,street} = props.adressedemonclient
    return(
        <>
        <div>{city}</div>
        <div>{postCode}</div>
        <div>{street}</div>
        </>
    )
} 