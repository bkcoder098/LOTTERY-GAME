 import {useState} from "react";
 import "./Lottery.css"
 import {genTicketNo,sum} from "./Helper";
 import Ticket from "./Ticket.jsx"
 

export default function LotteryTicket({n =3,winCondition}){
    let [ticket, setTicket] = useState(genTicketNo(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicketNo(n))
    }

    return(
        <div>
            <h2 className = "Title">LOOTTERY GAME </h2>
            <p> <b><i>IF THE SUM OF YOUR TICKET NO. = 15. THEN YOU WIN </i> </b> </p>
            <div className = "ticket">
                <Ticket ticket  = {ticket}/>
            </div>
            <button  className = " button" onClick = {buyTicket}> BUY NEW TICKET  </button>
            <h4 className = "Win">{isWinning &&"congratstulation you won!!! THE LOTTERY" }</h4>
        </div>
    )
}