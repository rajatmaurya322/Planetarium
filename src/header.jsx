import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return(
    <div id='header'>
        <div id='headtext'>
            <p id='maintext'>Virtual Planetarium</p>
            <p id='subtext'>Explore Space Here</p>
        </div>

        <nav>
            <Link to = {`/`}><button className='mainbtn'>Home</button></Link>
            <button className='mainbtn'>Sign Up
            <div className='dropdown'>
            <Link to={`login`}><div>Login</div></Link>
            <Link to={`register`}><div>Register</div></Link>
            </div>
            </button>
            <button className='mainbtn'>About</button>
            <button className='mainbtn'>Feedback</button>
        </nav>
    </div>
  )
}

export default Header