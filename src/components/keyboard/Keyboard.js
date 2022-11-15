import Letter from "../letter/Letter";
import "./keyboard.css";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
