import "./letter.css";

export default function Letter({
  letter,
  wrongLetter,
  correctLetter,
  winLose,
  addLetter,
}) {
  const isWrong = wrongLetter.includes(letter.toLowerCase());
  const isCorrect = correctLetter.includes(letter.toLowerCase()) && `active`;
  return (
    <button
      className={`letter ${isCorrect}`}
      onClick={() => addLetter(letter)}
      disabled={isWrong || winLose}
    >
      {letter}
    </button>
  );
}
