import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <form >
            <span className="logo">React Chat</span>
            <span className="title">Register</span>
            <input type="text" placeholder='display name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="file" id="file" style={{display:'none'}} />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
            <button>Sign up</button>
            <p>You have an account? Login</p>
        </form>
    </div>
</div>  
)
}

export default Register