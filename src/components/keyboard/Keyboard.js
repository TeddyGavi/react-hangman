import Letter from "../letter/Letter";
import "./keyboard.css";
import { alphabet } from "../../assets/alphabet";

export default function Keyboard({
  addLetter,
  correctLetter,
  wrongLetter,
  winLose,
}) {
  const keyboard = alphabet.map((e, i) => {
    return (
      <Letter
        key={i}
        letter={e}
        addLetter={addLetter}
        correctLetter={correctLetter}
        wrongLetter={wrongLetter}
        winLose={winLose}
      />
    );
  });

  return <section className="keyboard">{keyboard}</section>;
}
