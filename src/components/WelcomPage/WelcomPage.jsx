import { Link } from 'react-router-dom';
import { ReactComponent as JSlogo } from '../../image/javascript-1.svg';
import { Container } from '../WelcomPage/WelcomPage.styled';

export const WelcomePage = () => {
  return (
    <Container>
      <div>
        <div>
          <p>
            Добро пожаловать на сайт по решению задач по JavaScript для
            начинающих в виде тестов.
          </p>
        </div>
        <div>
          <p>
            На этом сайте вы найдете список задач для понимания работы различных
            конструкций языка JavaScript. Все, что Вам нужно, - это внимательно
            прочитать задание и выбрать один из четырех ответов. И еще - далеко
            не все задачи вам могут показаться простыми, т.к. чем больше
            информации вы узнаете, тем шире спектр решаемых задач и применяемых
            подходов.
          </p>
        </div>
        <Link to="card">Начать тест</Link>
      </div>
      <div>
        <JSlogo />
      </div>
    </Container>
  );
};
