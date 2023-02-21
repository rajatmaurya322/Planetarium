import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
      <section id="detail">
        <div id='content'>
          <h2>WELCOME TO VIRTUAL PLANETARIUM</h2>
          <p>LET THE CURIOUS MIND JUMP EVERYWHERE</p>
          <Link to={`login`}><button id='mainbtn'>LOGIN</button></Link>
        </div>
        <img src="spacebg.jpg" alt="spacebg.jpg" />
      </section>
    )
  }