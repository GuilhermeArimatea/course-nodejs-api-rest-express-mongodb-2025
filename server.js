const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node.js',
    '/livros': 'Entrei na página de livros',
    '/autores': 'Entrei na página de autores',
    '/editora': 'Entrei na página de editoras',
    '/sobre': 'Entrei na página sobre',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end(rotas[req.url] || 'Página não encontrada');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});