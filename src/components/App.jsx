import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const funcs = { good: setGood, neutral: setNeutral, bad: setBad };

  const handleIncrement = type => {
    const setState = funcs[type];
    setState(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    const positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  return (
    <div className="basic">
      <Section title="Feedback">
        <FeedbackOptions
          options={Object.keys(funcs)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
