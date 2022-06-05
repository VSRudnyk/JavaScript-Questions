export const ResultPage = ({ total, scoring }) => {
  return (
    <h2>{`Ваш результат: ${scoring} правильных ответов из ${total - 1}`}</h2>
  );
};
