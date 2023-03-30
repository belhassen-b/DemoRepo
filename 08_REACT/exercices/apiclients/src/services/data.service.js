import axios from "axios";



export const getInfosClientsFromApi = () => {
 return axios.get("http://localhost:8080/clients");
}