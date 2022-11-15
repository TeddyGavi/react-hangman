import "./letter.css";

export default function Letter(props) {
  const isWrong = props.wrongLetter.includes(props.letter.toLowerCase())
  const isCorrect = props.correctLetter.includes(props.letter.toLowerCase()) && `active`
  return (
    <button 
    className={`letter ${isCorrect}`}
    onClick={() => props.addLetter(props.letter)}
    disabled={isWrong || props.winLose}
    >
      {props.letter}
    </button>
  );
}
