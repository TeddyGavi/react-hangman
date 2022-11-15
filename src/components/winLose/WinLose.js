import "./winLose.css";

export default function WinLose(props) {
  return (
    <>
      <span className="title">Will you survive?</span>
      {(props.youWon && (
        <span>
          Winner!
          <button onClick={() => props.resetGame()} className="winner">
            Have another go?
          </button>
        </span>
      )) ||
        (props.youLost && (
          <span>
            Loser!
            <button onClick={() => props.resetGame()} className="loser">
              Have another go?
            </button>
            <span className="answer">{`The word was ${props.word.toUpperCase()}`}</span>
          </span>
        ))}
    </>
  );
}
