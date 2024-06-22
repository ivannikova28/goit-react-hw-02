import React, { useEffect, useState } from 'react'

import './App.css'
import { Description } from '../Description/Description'
import { Options } from '../Options/Options'
import { Feedback } from '../Feedback/Feedback'
import { Notification } from '../Notification/Notification'

const initial = {
	good: 0,
	neutral: 0,
	bad: 0
}

const LOCALSTORAGE_KEY_FEEDBACK = "feedback";


function App() {
  const [feedback, setFeedback] = useState(() => {

    const _feedbackLocalstorage = window.localStorage.getItem(LOCALSTORAGE_KEY_FEEDBACK)

    return _feedbackLocalstorage !== null ? JSON.parse(_feedbackLocalstorage) : initial
  })

  useEffect(() => {
    window.localStorage.setItem(LOCALSTORAGE_KEY_FEEDBACK, JSON.stringify(feedback))
  }, [feedback]);


  const handlerUpdateFeedback = (typeFeedback) => {
    console.log("handlerUpdateFeedback", typeFeedback);
    setFeedback((prev) => { 
      return {
        ...prev,
        [typeFeedback]: prev[typeFeedback] + 1,
      };
    })
  }

  const handlerResetFeedback = () => {
    setFeedback(prev => ({...prev, ...initial}))
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  // const _totalFeedback = Object.values(feedback).reduce((acc, item) => acc + item, 0)

  const positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        handlerUpdateFeedback={handlerUpdateFeedback}
        handlerResetFeedback={handlerResetFeedback}
        totalFeedback={totalFeedback}
      />

      {!!totalFeedback ? (
        <Feedback feedback={{ ...feedback, totalFeedback, positive }} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App
