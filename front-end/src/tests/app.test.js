import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes do component <App.js />', () => {
  test('Se na aplicação existe um link para a página Home', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);
    const homeAfterClick = screen.getByText(/Library App/i);
    expect(homeAfterClick).toBeInTheDocument();
  });

  test('Se na aplicação existe um link para a página Livros', () => {
    renderWithRouter(<App />);

    const booksLink = screen.getByRole('link', { name: /Livros/i });
    expect(booksLink).toBeInTheDocument();
    userEvent.click(booksLink);
    const booksAfterClick = screen.getByText(/livros encontrados/i);
    expect(booksAfterClick).toBeInTheDocument();
  });
});
