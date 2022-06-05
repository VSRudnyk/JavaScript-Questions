import { Link } from 'react-router-dom';

export const ResultPage = ({ total, scoring }) => {
  return (
    <>
      <h2>{`Ваш результат: ${scoring} правильных ответов из ${total - 1}`}</h2>
      <Link to="/">На Главную</Link>
    </>
  );
};
