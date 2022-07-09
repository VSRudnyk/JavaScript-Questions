import { Button, Container } from './ResultPage.styled';

export const ResultPage = ({ total, scoring }) => {
  return (
    <Container>
      <h2>{`Ваш результат: ${scoring} правильных ответов из ${total - 1}`}</h2>
      <Button to="/">На Главную</Button>
    </Container>
  );
};
