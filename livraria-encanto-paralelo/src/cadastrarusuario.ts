import { insertUser } from './models/userModel';

async function main() {
  await insertUser(
    'Nome do Usuário',
    'email@exemplo.com',
    '12345678900',
    '(11) 99999-9999',
    'senha123'
  );
  console.log('Usuário cadastrado com sucesso!');
  process.exit();
}

main();