import React, {useState} from "react";
// props for toggle page
export const Register = (props) => {
  //hook name email password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(email);
  }
  return (
    <div className="auth-container">
      <h2>Register</h2>
    
    <form className="register-form" onSubmit={handleSubmit}>
      {/* name */}
      <label htmlFor="name">Full name</label>
      <input value={name} onCharge={(event) => setName(event.target.value)}id="name" placeholder="your full name" name="name"/>
      {/* email */}
      <label htmlFor="email">email</label>
      <input value={email} oncharge={(event) => setEmail(event.target.value)}type="email" placeholder="youremail@example.com" id="email" name="email"/>
      {/* password */}
      <label htmlFor="password">password</label>
      <input value={password} oncharge={(event) => setPassword(event.terget.value)}type="password" placeholder="enter password" id="password" name="password"/>
      {/* Log in button */}
      <button type="submit">Log in</button>
    </form>
    {/* go to Login page */}
    <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>Have an account. Login Here</button>
    </div>
  )
}


