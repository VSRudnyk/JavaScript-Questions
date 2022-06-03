import { useState } from 'react';
import { data } from '../../data/data';
import {
  Container,
  ButtonContainer,
  Pre,
  Button,
  QuestionNumber,
  NextBtn,
  Question,
  Background,
} from './Card.styled';

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
    <Background>
      <Container>
        <QuestionNumber>{`Вопрос №${id}`}</QuestionNumber>
        <Question>{question}</Question>

        <Pre>{codeExample}</Pre>

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

        <NextBtn type="button" onClick={handelClickNextBtn}>
          Далее
        </NextBtn>
      </Container>
    </Background>
  );
};
