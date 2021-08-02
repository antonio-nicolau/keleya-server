import app from './app';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('running'));

process.on('SIGINT', () => server.close())