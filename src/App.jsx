import LotteryTicket from "./Lottery.jsx"
import './App.css'
import Lottery from "./Lottery.jsx";
import {sum} from "./Helper.js"

function App() {
  let winCondition = (ticket) =>{
    return sum(ticket) === 15;
  }
  
  return (
    <div className = "BACKGROUND-COLOR">
    <Lottery  n = {3}  winCondition = {winCondition}/>
    
    </div>
  )
}

export default App
