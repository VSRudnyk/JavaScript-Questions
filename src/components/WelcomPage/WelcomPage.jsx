import {
  Container,
  Title,
  Text,
  Button,
  LogoWrapper,
  Logo,
} from '../WelcomPage/WelcomPage.styled';

export const WelcomePage = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <div>
        <Title>
          Добро пожаловать на сайт по решению задач по JavaScript для начинающих
          в виде тестов.
        </Title>

        <Text>
          На этом сайте вы найдете список задач для понимания работы различных
          конструкций языка JavaScript. Все, что Вам нужно, - это внимательно
          прочитать задание и выбрать один из четырех ответов. И еще - далеко не
          все задачи вам могут показаться простыми, т.к. чем больше информации
          вы узнаете, тем шире спектр решаемых задач и применяемых подходов.
        </Text>

        <Button to="card">Начать тест</Button>
      </div>
    </Container>
  );
};
