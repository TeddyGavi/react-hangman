import Keyboard from "./components/keyboard/Keyboard";
import HangmanDrawing from "./components/hangman_drawing/HangmanDrawing";
import Guess from "./components/guess/Guess";
import { useCallback, useEffect, useState } from "react";
import WinLose from "./components/winLose/WinLose";
import { wordArray } from "./assets/wordArray";

function getRandWord() {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function App() {
  const [guessWord, setGuessWord] = useState(getRandWord);
  const [guessed, setGuessed] = useState([]);

  const wrongLetter = guessed.filter((x) => !guessWord.includes(x));
  const correctLetter = guessed.filter((x) => guessWord.includes(x));

  const youLost = wrongLetter.length >= 6;
  const youWon = guessWord.split("").every((x) => guessed.includes(x));

  const resetGame = () => {
    setGuessWord(getRandWord);
    setGuessed([]);
  };

  const addLetter = useCallback(
    (letter) => {
      if (guessed.includes(letter.toLowerCase()) || youLost || youWon) return;
      setGuessed((prev) => [...prev, letter.toLowerCase()]);
    },
    [guessed, youLost, youWon]
  );

  useEffect(() => {
    const handleKeyPress = (KeyboardEvent) => {
      const { key } = KeyboardEvent;
      if (!key.match(/^[a-z]$/)) return;

      KeyboardEvent.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [addLetter]);

  return (
    <div className={`App ${(youLost || youWon) && "end"}`}>
      <WinLose
        word={guessWord}
        resetGame={resetGame}
        youWon={youWon}
        youLost={youLost}
      />
      <HangmanDrawing numGuess={wrongLetter.length} />
      <Guess guess={guessWord} guessedLetters={guessed} />
      <Keyboard
        winLose={youLost || youWon}
        wrongLetter={wrongLetter}
        correctLetter={correctLetter}
        addLetter={addLetter}
      />
    </div>
  );
}

export default App;
