import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log('server running'));

process.on('SIGINT', () => server.close())