import Letter from "../letter/Letter";
import "./keyboard.css";
import { alphabet } from "../../assets/alphabet";

export default function Keyboard(props) {
  const keyboard = alphabet.map((e, i) => {
    return <Letter 
    key={i} 
    letter={e} 
    addLetter={props.addLetter} 
    correctLetter={props.correctLetter}
    wrongLetter={props.wrongLetter}
    winLose={props.winLose}
    />;
  });

  return <section className="keyboard">{keyboard}</section>;
}
