import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

function Home(props) {
  const navigate  = useNavigate();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
      alert("Signed Out succesfully.");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='home-body'>
    <div className='home-center'>
        <h1>
            <Link to='/login'>Login</Link>
        </h1>
        <br />
        <h1> <Link to='/signup'>Sign Up</Link> </h1>
    </div>
    <div className='home-between'>
    <h2>{props.name ? `Welcome home ${props.name}` : "Login please"}</h2>
    {props.name && <button onClick={handleLogOut}>Sign out</button> }
    </div>
    </div>
  )
}

export default Home