import GuessLetter from "../guessed_letter/GuessLetter"
import "./guess.css"


export default function Guess({ guess, guessedLetters }) {
//  console.log(guess, guessedLetters)
  const word = guess.split("").map((x, i) => {
    return (
      <GuessLetter 
        key={i} 
        inOrderLetter={x} 
        guessedLetters={guessedLetters}
        />
    )
  })
  return (
      <div className="guess" >
      {word}
    </div>
  )
}