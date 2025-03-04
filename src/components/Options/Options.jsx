export default function Options({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
  totalFeedback,
  handleReset,
}) {
  return (
    <div>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>

      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
