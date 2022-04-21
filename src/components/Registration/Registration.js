import React from "react";
import { useNavigate } from "react-router-dom";
import {auth}  from '../../Firebase/Firebase.init';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();

const Signup = () => {
const navigate = useNavigate();

const googleAuth =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    navigate("/"); 
    
  })
  
  .catch((error) => {  
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });

};


  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign up/Registration</h1>
        <form>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='email' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth' onClick={googleAuth}>
            
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;