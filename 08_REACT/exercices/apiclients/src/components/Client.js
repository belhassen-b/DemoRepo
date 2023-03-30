import { Adresse } from "./Adresse";

export function Client(props){

    const {firstName,lastName,phone,status,address} =props.client
    return(
        <>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{phone}</div>
        <div>{status ? "client actif" : "client non actif"}</div>
        <Adresse adressedemonclient={address}></Adresse>
        </>
    )
} 