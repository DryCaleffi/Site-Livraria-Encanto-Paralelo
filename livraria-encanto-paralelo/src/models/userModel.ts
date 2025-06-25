import { openDb } from '../database/db';

export async function createUserTable() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      cpf TEXT,
      telefone TEXT
    )
  `);
}

export async function insertUser(nome: string, email: string, cpf: string, telefone: string) {
  const db = await openDb();
  await db.run(
    'INSERT INTO usuarios (nome, email, cpf, telefone) VALUES (?, ?, ?, ?)',
    [nome, email, cpf, telefone]
  );
}

export async function findUserByEmail(email: string) {
  const db = await openDb();
  return db.get('SELECT * FROM usuarios WHERE email = ?', [email]);
}

export async function getAllUsers() {
  const db = await openDb();
  return db.all('SELECT * FROM usuarios');
}