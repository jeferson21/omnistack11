// Arquivo principal. Todo código parte daqui.
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Armazena e aplicação 
const app = express();


app.user(cors()); // é possível definir a orgem que pode acessar a aplicação aqui 



// Converte o JSON algo entendivel em JS
app.use(express.json());
app.use(routes);

// Informando a porta utilizada
app.listen(3333); 


