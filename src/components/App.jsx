import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import { Background, Container } from './App.styled';
import { Card } from './Card/Card';
import { WelcomePage } from './WelcomPage/WelcomPage';

// const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
// const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView/LoginView'));

export const App = () => {
  return (
    <Background>
      <Container>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="card" element={<Card />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Background>
  );
};
