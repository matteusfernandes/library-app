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

  test('Se na aplicação existe um link para a página Pesquisar', async () => {
    renderWithRouter(<App />);

    const searchLink = screen.getByRole('link', { name: /pesquisar/i });
    expect(searchLink).toBeInTheDocument();
    await userEvent.click(searchLink);
    const searchAfterClick = screen.getByText(/Pesquisar Livro/i);
    expect(searchAfterClick).toBeInTheDocument();
  });

  test('Se na aplicação existe um link para a página Cadastrar', async () => {
    renderWithRouter(<App />);

    const createNewBookLink = screen.getByRole('link', { name: /cadastrar/i });
    expect(createNewBookLink).toBeInTheDocument();
    await userEvent.click(createNewBookLink);
    const createNewBookAfterClick = screen.getByText(/Cadastrar novo Livro/i);
    expect(createNewBookAfterClick).toBeInTheDocument();
  });
});
