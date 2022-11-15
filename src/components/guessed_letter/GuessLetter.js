import "./guessLetter.css";

export default function GuessLetter({ inOrderLetter, guessedLetters }) {
  // const guessedLetters = ["a", "e", "i", "o", "u"];
  // const [guess, setGuess] = useState([])
  // console.log(props.guessedLetters)


  return (
    <span className="each-letter">
      <span
        style={{
          visibility: guessedLetters && guessedLetters.map(x => x.toLowerCase()).includes(inOrderLetter)
            ? "visible"
            : "hidden",
        }}
      >
        {inOrderLetter}
      </span>
    </span>
  );
}
