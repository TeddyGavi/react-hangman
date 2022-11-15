import "./winLose.css";

export default function WinLose({ youLost, youWon, resetGame, word }) {
  return (
    <>
      <span className="title">Will you survive?</span>
      {(youWon && (
        <span>
          Winner!
          <button onClick={() => resetGame()} className="winner">
            Have another go?
          </button>
        </span>
      )) ||
        (youLost && (
          <span>
            Loser!
            <button onClick={() => resetGame()} className="loser">
              Have another go?
            </button>
            <span className="answer">{`The word was ${word.toUpperCase()}`}</span>
          </span>
        ))}
    </>
  );
}
