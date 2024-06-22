import React from 'react'

export const Feedback = ({ feedback }) => {
  const { good, neutral, bad, totalFeedback, positive } = feedback;
  
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};
