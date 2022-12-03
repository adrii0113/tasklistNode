

import { useRef } from "react";
import { useState } from "react";
// bootstrap
import { Button } from 'react-bootstrap';
import { CForm, CFormInput, CFormLabel, CFormText, CFormCheck, CButton } from '@coreui/bootstrap-react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { loginUser } from './../../utils/fetchfunctions';
export default function Login(){

  const [count, setCount] = useState(1);

    const email = useRef();
    const password = useRef();

    const sendUser = () => {
      const user = {
        email : email.current.value,
        password : password.current.value
      }

      loginUser(user)
    }
    return (

  //   <div className="form">
     
  //      <div className="input-container">
  //        <label>Email </label>
  //        <input type="text" name="email" required ref={email} />
  //      </div>
  //      <div className="input-container">
  //        <label>Password </label>
  //        <input type="password" name="password" required ref={password} />
  //      </div>
      
  //      <div class="footer">
  //           <button  onClick={sendUser}type="submit" class="btn">Login</button>
  //       </div>
  //       <p>Contador : {count}</p>
  //       <button onClick={() => setCount(count + 1)}>
  //       Sumar
  //     </button>
  //     <button onClick={() => setCount(count - 1)}>
  //       Restar
  //     </button>
  //     <Button className="btn btn-primary">a</Button>
  //  </div>

  <CForm>

  <div className="mb-3">

    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>

    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email}/>

    <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>

  </div>

  <div className="mb-3">

    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>

    <CFormInput type="password" id="exampleInputPassword1" ref={password}/>

  </div>

  {/* <CFormCheck

    className="mb-3"

    label="Check me out"

    onChange={(e) => {

      console.log(e.target)

    }}

  /> */}

  <CButton  color="primary" onClick={sendUser}>

    Submit

  </CButton>

</CForm>
    )
}