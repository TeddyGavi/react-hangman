import "./guessLetter.css";

export default function GuessLetter({ inOrderLetter, guessedLetters }) {
  return (
    <span className="each-letter">
      <span
        style={{
          visibility:
            guessedLetters &&
            guessedLetters.map((x) => x.toLowerCase()).includes(inOrderLetter)
              ? "visible"
              : "hidden",
        }}
      >
        {inOrderLetter}
      </span>
    </span>
  );
}
