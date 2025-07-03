import { Router } from 'express';
import { openDb } from '../database/db';

const router = Router();

// Cria a tabela de livros, se não existir
export async function createLivrosTable() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS livros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      autor TEXT NOT NULL,
      editora TEXT,
      ano INTEGER
    )
  `);
}

// Insere um novo livro
export async function insertLivro(
  titulo: string,
  autor: string,
  editora: string,
  ano: number | null,
  imagem: string | null
) {
  const db = await openDb();
  await db.run(
    'INSERT INTO livros (titulo, autor, editora, ano, imagem) VALUES (?, ?, ?, ?, ?)',
    [titulo, autor, editora, ano, imagem]
  );
}

// Busca todos os livros
export async function getAllLivros() {
  const db = await openDb();
  return db.all('SELECT * FROM livros');
}
