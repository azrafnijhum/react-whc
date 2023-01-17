import React, {useState} from "react";
// props for toggle page
export const Login = (props) => {
  //hook email password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

  }
  return (
    <div className="auth-container">
      <h2>Login</h2> 
      <form className="login-form" onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email"/>
        {/* password */}
        <label htmlFor="password">password</label>
        <input value={password} oncharge={(event) => setPassword(event.target.value)} type="password" placeholder="enter password" id="password" name="password"/>
        {/* Log in button */}
        <button type="submit">Log in</button>
      </form>

      {/* go to register page */}
      <button className="link-btn" onClick={() => props.onFormSwitch("Register")}>Create a new account</button>
      </div> 
  )
}



