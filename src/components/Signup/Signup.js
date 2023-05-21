import React, { useState } from 'react'
import './Signup.css';
import Input from '../Inputs/Input';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../Firebase';


function Signup() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        name:"",
        email:"",
        pswd:"",
    });
    const [errorMsg, setErrMsg] = useState("");
    const [submitBtn,setSubmitBtn] = useState(false);
    const handleSubmit= ()=> {
        if(!fields.name || !fields.email || !fields.pswd){
            setErrMsg("All the above fields are mandatory!!");
            return;
        }
        setErrMsg("");
        setSubmitBtn(true);
        createUserWithEmailAndPassword(auth,fields.email,fields.pswd)
        .then(async (res) => {
            const user = res.user;
            await updateProfile(user,{
                displayName:fields.name,
            })
            // console.log(user);
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
            <h1 className='login-heading'>Sign Up</h1>
            
            <Input label="Name" placeholder="Enter your full name" onChange={(e) => {
                setFields((prev)=> ({...prev,name:e.target.value}))
            }} />
            <Input label="Email" placeholder="Enter email address" onChange={(e) => {
                setFields((prev)=> ({...prev,email:e.target.value}))
            }} />
            <Input label="Password" type="password" placeholder="Enter password" onChange={(e) => {
                setFields((prev)=> ({...prev,pswd:e.target.value}))
            }} />

            <div className='login-footer'>
                <p className='error'>{errorMsg}</p>
                <button onClick={handleSubmit} disabled={submitBtn} >SignUp</button>
                <p>Already have an account?{" "}<span><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup