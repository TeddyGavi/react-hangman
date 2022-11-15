import "./hangman.css";

const body = [
  "man-head",
  "man-body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

export default function HangmanDrawing({ numGuess }) {
  const bodyDiv = body.map((x, i) => {
    return (
      <div
      key={i}
      className={x}></div>
    )
  })

  return (
    <section className="man-container">
      {bodyDiv.slice(0, numGuess)}
      <div className="hang-arm"></div>
      <div className="vertical-arm"></div>
      <div className="upright"></div>
      <div className="base"></div>
    </section>
  );
}
