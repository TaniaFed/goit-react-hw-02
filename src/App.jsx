import { useState } from 'react';
import './App.css';
import DescriptionTitle from './components/Description/Description';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DescriptionTitle />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Good {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Neutral {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Bad {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Reset {count}
        </button>
      </div> */}
      <p className="feedbackTitle">No feedback yet</p>
    </>
  );
}

export default App;
