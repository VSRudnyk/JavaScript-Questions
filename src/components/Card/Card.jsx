import { useState } from 'react';
import { data } from '../../data/data';
import { Container, ButtonContainer, Pre, Button } from './Card.styled';

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
    <Container>
      <h2>{`Вопрос №${id}`}</h2>
      <h2>{question}</h2>

      <Pre>
        <code>{codeExample}</code>
      </Pre>

      <ButtonContainer>
        {possiblAnswer.map((answer, index) => {
          return (
            <Button
              onClick={handelClick}
              // className="btn"
              id="answer"
              disabled={disabled}
              data-answer={answer}
              key={index}
            >
              {answer}
            </Button>
          );
        })}
      </ButtonContainer>

      <br />
      <button type="button" onClick={handelClickNextBtn}>
        Сдедующий вопрос
      </button>
    </Container>
  );
};
