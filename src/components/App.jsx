import { useState } from 'react';
import data from '../data/data.json';

export const App = () => {
  const id = 1;
  const currentCard = data.find(card => card.id === String(id));
  const { question, codeExample, possiblAnswer, correctAnswer } = currentCard;
  const [disabled, setDisabled] = useState(false);

  const handelClick = e => {
    const selectedAnswer = e.target.dataset.answer;
    if (selectedAnswer === correctAnswer) {
      e.target.classList.add('green');
      setDisabled(true);
    } else {
      e.target.classList.add('red');
      setDisabled(true);
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <pre>
        <code>{codeExample}</code>
      </pre>
      {possiblAnswer.map((answer, index) => (
        <button
          onClick={handelClick}
          disabled={disabled}
          data-answer={answer}
          key={index}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};
