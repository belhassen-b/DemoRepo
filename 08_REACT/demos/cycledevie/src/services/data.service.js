import axios from "axios";

// const data = ["toto","titi","tata"]

// export const getData = () => new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(data)
//     },5000)
// })

const urlapi ="https://pokeapi.co/api/v2/pokemon/ditto";

export const getInfoPokeApi = () => {
    return axios.get(urlapi);
}