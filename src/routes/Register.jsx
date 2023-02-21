import './Register.css'
import { Form } from 'react-router-dom'

export default function Register(){
    return(
        <div id='registerform'>
            <Form action="">
                <div id='registertext'>
                    <p>Register Here</p>
                    <img src="register.png" alt="register.png" />
                </div>
                <div className='field'>
                    <input type="email" required />
                    <span>Email:</span>
                </div>
                <div className='field'>
                    <input type="text" required />
                    <span>Username:</span>
                </div>
                <div className='field'>
                    <input type="password" required />
                    <span>Password:</span>
                </div>
                <div className='field'>
                    <input type="password" required />
                    <span>Re-type Password:</span>
                </div>
                <button type="submit" id='registerbtn' >Register</button>
            </Form>
        </div>
    )
}