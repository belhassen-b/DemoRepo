import  axios  from "axios"


const URL ="URL"

export function requestPost(data) {
    axios.post(URL,data)
}

export async function requestGet(){
    const response = await axios.get(URL)

    const dataget = []
    for(const key in response.data){
        const responseObj = {
            id : key,
            mail : response.data[key].mail,
            name : response.data[key].name,
        };
        dataget.push(responseObj)
    }
    return dataget;
}


export async function requestPostWithResponse(data){
    const response = await axios.post(URL,data)
    // .name pour recup la clé firebase
    const id = response.data.name
    return id;
}
