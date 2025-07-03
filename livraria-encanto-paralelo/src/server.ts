// src/server.ts
import app from './app';
import { createUserTable } from './models/userModel';
import { createLivrosTable } from './models/livrosModels';


const PORT = process.env.PORT || 3000;


Promise.all([createUserTable(), createLivrosTable()]).then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  });
  
export default app;