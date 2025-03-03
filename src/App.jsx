import { useState, useEffect } from 'react';
import './App.css';
import DescriptionTitle from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

export default function App() {
  const [typeClicks, setTypeClicks] = useState(() => {
    const savedData = window.localStorage.getItem('saved-data');
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-data', JSON.stringify(typeClicks));
  }, [typeClicks]);

  const updateFeedback = (feedbackType) => {
    setTypeClicks((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setTypeClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = typeClicks.good + typeClicks.neutral + typeClicks.bad;

  return (
    <>
      <DescriptionTitle />
      <div className="buttons">
        <Options handleClick={() => updateFeedback('good')} reviewType="Good" />
        <Options
          handleClick={() => updateFeedback('neutral')}
          reviewType="Neutral"
        />
        <Options handleClick={() => updateFeedback('bad')} reviewType="Bad" />

        {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
      </div>
      {totalFeedback > 0 ? (
        <>
          <Feedback typeName="Good" clicks={typeClicks.good} />
          <Feedback typeName="Neutral" clicks={typeClicks.neutral} />
          <Feedback typeName="Bad" clicks={typeClicks.bad} />
          <Feedback typeName="Total" clicks={totalFeedback} />
          <Feedback
            typeName="Positive"
            clicks={Math.round((typeClicks.good / totalFeedback) * 100)}
            text="%"
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
