import { useState } from 'react';
import { data } from '../../data/data';

export const Card = () => {
  const [disabled, setDisabled] = useState(false);
  const [id, setId] = useState(1);

  const currentCard = data.find(card => card.id === String(id));
  const { question, codeExample, possiblAnswer, correctAnswer } = currentCard;

  const handelClickNextBtn = () => {
    setId(prev => prev + 1);
    setDisabled(false);
    const elements = document.querySelectorAll('#answer');
    elements.forEach(element => {
      element.classList.remove('green');
      element.classList.remove('red');
    });
  };

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
      <h2>{`Вопрос №${id}`}</h2>
      <h2>{question}</h2>

      <pre>
        <code>{codeExample}</code>
      </pre>
      {possiblAnswer.map((answer, index) => {
        return (
          <button
            onClick={handelClick}
            className="btn"
            id="answer"
            disabled={disabled}
            data-answer={answer}
            key={index}
          >
            {answer}
          </button>
        );
      })}
      <br />
      <button type="button" onClick={handelClickNextBtn}>
        Сдедующий вопрос
      </button>
    </div>
  );
};
