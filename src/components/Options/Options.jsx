export default function Options({ reviewType, handleClick }) {
  return <button onClick={handleClick}>{reviewType}</button>;
}
