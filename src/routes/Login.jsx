import './Login.css'
import { Form, Link } from 'react-router-dom'

export default function Login(){
    return(
        <div id="loginform">
            <Form action='/planetarium' >
                <div id='logintext'>
                <img src="rocket.png" alt="rocket.png" />
                <p>WELCOME</p>
                </div>
               <div className='logfield'>
                    <input type="text" required />
                    <span>Username:</span>
                </div> 
                <div className='logfield'>
                    <input type="password" required/>
                    <span>Password:</span> 
                    <div id='forget'><Link to={`/register`}>Forget Password?</Link></div>
                </div>
                <button type="submit" id='submitbtn'>SUBMIT</button>
            </Form>
        </div>
    )
}