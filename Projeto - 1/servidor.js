const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const imagem404 = path.join(__dirname, 'assets', 'images', '404.png');

const handleRequest = (req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        switch (url) {
            case '/': {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>Bem-vindo à página inicial do projeto.</h1>');
                break;
            }
            case '/sobre': {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
          <h1>Sobre</h1><br/>
          <p>Meu nome é Alyasaf Meireles</p>
          <p>21 anos</p>
          <p>Desenvolvedor De Software</p>
        `);
                break;
            }
            case '/contato': {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
          <h1>Contato</h1><br/>
          <p>aly@email.com</p>
          <p>+55 (61)97777-8888</p>
        `);
                break;
            }
            default: {
                fs.readFile(imagem404, (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                        res.end('Erro ao carregar a imagem.');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(`
                            <h1>Página não encontrada</h1>
                            <img src="data:image/png;base64,${data.toString('base64')}" alt="404" width="400px"/>
                          `);
                    }
                });
                break;
            }
        }
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});