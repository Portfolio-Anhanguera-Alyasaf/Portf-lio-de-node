const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota GET
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Rota POST
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Sucesso', data });
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}.`);
});

module.exports = app;
