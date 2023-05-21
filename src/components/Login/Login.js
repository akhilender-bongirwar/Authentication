import React from 'react'
import './Login.css';
import Input from '../Inputs/Input';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase';

function Login() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        email:"",
        pswd:"",
    });
    const [errorMsg, setErrMsg] = useState("");
    const [submitBtn,setSubmitBtn] = useState(false);
    const handleSubmit= ()=> {
        if(!fields.email || !fields.pswd){
            setErrMsg("All the above fields are mandatory!!");
            return;
        }
        setErrMsg("");
        setSubmitBtn(true);
        signInWithEmailAndPassword(auth,fields.email,fields.pswd)
        .then((res) => {
            setSubmitBtn(false);
            navigate("/");
        })
        .catch(err => {
        setErrMsg(err.message);
        setSubmitBtn(false);
        })
    }

  return (
    <div className='login-container'>
        <div className='login-innerbox'>
            <h1 className='login-heading'>Login</h1>

            <Input label="Email" placeholder="Enter your email address" onChange={(e) => {
                setFields((prev)=> ({...prev,email:e.target.value}))
            }}/>
            <Input label="Password" placeholder="Enter the password" type="password"
                onChange={(e) => {
                setFields((prev)=> ({...prev,pswd:e.target.value}))
            }}
            />

            <div className='login-footer'>
            <p className='error'>{errorMsg}</p>
                <button disabled={submitBtn} onClick={handleSubmit} >Login</button>
                <p>Don't have an account?{" "}<span><Link to='/signup'>Sign Up</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login