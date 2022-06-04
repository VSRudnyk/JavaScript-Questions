import { useState } from 'react';
import { data } from '../../data/data';
import LongMenu from 'components/Menu/Menu';
import {
  Container,
  ButtonContainer,
  Button,
  QuestionNumber,
  NextBtn,
  Question,
  Background,
  CodeExmpContainer,
} from './Card.styled';

export const Card = () => {
  const [disabled, setDisabled] = useState(false);
  const [disNextBtn, setDisNextBtn] = useState(false);
  const [id, setId] = useState(1);

  const currentCard = data.find(card => card.id === String(id));
  const { question, codeExample, possiblAnswer, correctAnswer } = currentCard;

  const handelClickNextBtn = () => {
    data.length - 1 === id && setDisNextBtn(true);
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
        <LongMenu currentId={id} />
        <QuestionNumber>{`Вопрос №${id}`}</QuestionNumber>
        <Question>{question}</Question>

        <CodeExmpContainer
          dangerouslySetInnerHTML={{ __html: codeExample }}
        ></CodeExmpContainer>

        <ButtonContainer>
          <NextBtn
            type="button"
            disabled={disNextBtn}
            onClick={handelClickNextBtn}
          >
            Далее
          </NextBtn>
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
      </Container>
    </Background>
  );
};
