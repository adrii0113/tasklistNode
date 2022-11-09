
import axios from 'axios'

import { useRef } from "react";
import { newUser} from './../../utils/fetchfunctions';
export default function Register(){

    const userName = useRef();
    const nombreCompleto = useRef();
    const email = useRef();
    const password = useRef();
    const phone = useRef();
    
    function registerUser(){
        
        const user = {
            userName : userName.current.value,
            fullName : nombreCompleto.current.value,
            email : email.current.value,
            password : password.current.value,
            phone : phone.current.value
        }

        newUser(user);
      
    }
    
    return(

        <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="Username">Username </label>
                <input className="form__input" type="text" id="Username" placeholder="Username" ref={userName}/>
            </div>
            <div className="nombreCompleto">
                <label className="form__label" for="nombreCompleto">Nombre completo</label>
                <input  type="text" name="nombreCompleto" id="nombreCompleto"  className="form__input"placeholder="nombreCompleto" ref={nombreCompleto}/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email</label>
                <input  type="email" id="email" className="form__input" placeholder="Email" ref={email}/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password" ref={password}/>
            </div>
            <div className="confirm-password">
                <label className="phone" for="phone">Confirm Password </label>
                <input className="form__input" type="text" id="phone" placeholder="phone" ref={phone}/>
            </div>
        </div>
        <div class="footer">
            <button  onClick={registerUser}type="submit" class="btn">Register</button>
        </div>
    </div>      
    )



}
