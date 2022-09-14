import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testes do component <App.js />', () => {
  test('Se na aplicação existe um link para a página Home', async () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    await userEvent.click(homeLink);
    const homeAfterClick = screen.getByText(/Library App/i);
    expect(homeAfterClick).toBeInTheDocument();
  });

  test('Se na aplicação existe um link para a página Livros', async () => {
    renderWithRouter(<App />);

    const booksLink = screen.getByRole('link', { name: /livros/i });
    expect(booksLink).toBeInTheDocument();
    await userEvent.click(booksLink);
    const booksAfterClick = screen.getByText(/Livros Encontrados/i);
    expect(booksAfterClick).toBeInTheDocument();
  });
});
