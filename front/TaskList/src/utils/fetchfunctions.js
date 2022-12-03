
import axios from 'axios'

export async function newUser(user){
    
    // const PF = process.env.REACT_APP_BASE_URL;
    // console.log(PF)
    const config = {
        headers: {
            Authorization : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjJiYTFmMzM3ODg1NTNkNDcxMTA5NSIsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE2Njc0OTQ3MTd9.IAxVGbG98PJhBHP-aumVdFYyBpCiELlcCAYcIC0ZdZk'
        }
    }
    try {
        await axios.post('http://localhost:3000/api/auth/register',user,config)
            .then(response => console.log(response.data))
            .catch(error =>error.json)
    } catch (error) {
        console.log(error.json)
    }
    

}


export async function loginUser(user){
    
    const config = {
        headers: {
            Authorization : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjJiYTFmMzM3ODg1NTNkNDcxMTA5NSIsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE2Njc0OTQ3MTd9.IAxVGbG98PJhBHP-aumVdFYyBpCiELlcCAYcIC0ZdZk'
        }
    }
    try {
        await axios.post('http://localhost:3000/api/auth/login',user,config)
            .then(response => console.log({token:response.data.token}))
            .catch(error =>console.log(error.json))
    } catch (error) {
        console.log(error.json)
    }


}