const http = require('http');
const {
    getHome,
    getHTML,
    getText,
    getComments,
    handleNotFound,
    postComment,
} = require('./handlers.js');

const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }

    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }
    res.statusCode = 404;
    return handleNotFound(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
