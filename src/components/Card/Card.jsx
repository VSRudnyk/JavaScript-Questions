import { useState } from 'react';
import { data } from '../../data/data';
import LongMenu from 'components/Menu/LongMenu';
import { ResultPage } from 'components/ResultPage/ResultPage';
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
  const totalCards = data.length;
  const [disabled, setDisabled] = useState(false);
  const [id, setId] = useState(1);
  const [scoring, setScoring] = useState(0);
  const [resultPage, setResultPage] = useState(false);

  const currentCard = data.find(card => card.id === String(id));
  const { question, codeExample, possiblAnswer, correctAnswer } = currentCard;

  const handelClickNextBtn = () => {
    setId(prev => prev + 1);
    setDisabled(false);

    data.length - 1 === id && setResultPage(true);
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
      setScoring(prev => prev + 1);
    } else {
      e.target.classList.add('red');
      setDisabled(true);
    }
  };

  const handelChoiceQuestion = id => {
    setId(Number(id));
  };

  return (
    <Background>
      {resultPage ? (
        <ResultPage total={totalCards} scoring={scoring} />
      ) : (
        <Container>
          <LongMenu currentId={id} onChoice={handelChoiceQuestion} />
          <QuestionNumber>{`Вопрос №${id}`}</QuestionNumber>
          <Question>{question}</Question>

          <CodeExmpContainer
            dangerouslySetInnerHTML={{ __html: codeExample }}
          ></CodeExmpContainer>

          <ButtonContainer>
            <NextBtn type="button" onClick={handelClickNextBtn}>
              {data.length - 1 === id ? 'Рузультат' : 'Далее'}
            </NextBtn>
            {possiblAnswer.map((answer, index) => {
              return (
                <Button
                  onClick={handelClick}
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
      )}
    </Background>
  );
};
