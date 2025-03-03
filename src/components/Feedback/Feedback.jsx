export default function Feedback({ typeName, clicks, text = '' }) {
  return (
    <>
      <p>
        {typeName}: {clicks}
        {text}
      </p>
    </>
  );
}
