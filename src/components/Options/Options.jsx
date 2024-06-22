import React from 'react'

export const Options = ({totalFeedback, handlerUpdateFeedback, handlerResetFeedback }) => {
  return (
    <div>
      <button onClick={() => handlerUpdateFeedback("good")}>Good</button>
      <button onClick={() => handlerUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => handlerUpdateFeedback("bad")}>Bad</button>
      
      {!!totalFeedback && <button onClick={handlerResetFeedback}>reset</button>}
    </div>
  );
};
