// src/server.ts
import app from './app';
import { createUserTable } from './models/userModel';


const PORT = process.env.PORT || 3000;


createUserTable().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  });
  
export default app;