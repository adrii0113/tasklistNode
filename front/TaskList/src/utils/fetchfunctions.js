
import axios from 'axios'

export async function newUser(user){
    
    const PF = process.env.REACT_APP_BASE_URL;
    console.log(PF)
    try {

        await axios.post('http://localhost:3000/api/auth/register',user)
            .then(response => console.log(response.json))
            .catch(error =>error.json)
    } catch (error) {
    }
    



   

}


export async function loginUser(user){

    try {
        
    } catch (error) {
        
    }


}