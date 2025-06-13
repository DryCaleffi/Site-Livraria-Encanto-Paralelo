// filepath: c:\Users\adeso\Documents\Livraria_Encanto_Paralelo\src\types\index.d.ts
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

interface User {
  id: number;
  username: string;
  password: string;
}

interface Tabela1 {
  id: number;
  field1: string;
  field2: string;
}

interface Tabela2 {
  id: number;
  fieldA: string;
  fieldB: string;
}