
export default function Register(){

    // const user = {
    //     username : 
    // }

    const username = useRef();
    const nombreCompleto = useRef();
    const email = useRef();
    const password = useRef();
    return(

        <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="Username">Username </label>
                <input className="form__input" type="text" id="Username" placeholder="Username" ref={username}/>
            </div>
            <div className="lastname">
                <label className="form__label" for="name">Name </label>
                <input  type="text" name="" id="name"  className="form__input"placeholder="name"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email</label>
                <input  type="email" id="email" className="form__input" placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password </label>
                <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn">Register</button>
        </div>
    </div>      
    )



}
