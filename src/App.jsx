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
  const positiveFeedback = Math.round((typeClicks.good / totalFeedback) * 100);
  return (
    <>
      <DescriptionTitle />
      <Options
        handleClickGood={() => updateFeedback('good')}
        handleClickNeutral={() => updateFeedback('neutral')}
        handleClickBad={() => updateFeedback('bad')}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            clicksGood={typeClicks.good}
            clicksNeutral={typeClicks.neutral}
            clicksBad={typeClicks.bad}
            clicksTotal={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
