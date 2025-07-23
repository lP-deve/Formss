
import { Link } from 'react-router-dom'
import './Result.css'
export default function Result(){

    return(<>
    
      <div className="content">
      <div className="bg">
             <img className='visible' src="/big.png" alt="" />
        <img className='hidden' src="public/Group 10 (2).png" alt="" />
      </div>

      <div className="result">
       <img src="/Oval (1).svg" alt="" />
       <img id="absolute" src="/Path (3).svg" alt="" />
       <h1>THANK YOU!</h1>
       <p>We’ve added your card details</p>
       <Link to="/"><button>Continue</button></Link>
      </div>
        <div className="cards">
         <img className='visible' src="/Group 16.png" alt="" />
        <img className='hidden' id="display" src="public/Group 9.png" alt="" />
      </div>
    </div>
    
    </>)
}