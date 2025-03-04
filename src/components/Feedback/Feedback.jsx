export default function Feedback({
  clicksGood,
  clicksNeutral,
  clicksBad,
  clicksTotal,
  positiveFeedback,
}) {
  return (
    <>
      <p>Good: {clicksGood}</p>
      <p>Neutral: {clicksNeutral}</p>
      <p>Bad: {clicksBad}</p>
      <p>Total: {clicksTotal}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}
