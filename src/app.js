import express from 'express';

const app = express();

// Ruta de prueba para "Hola Mundo"
app.get('/', (req, res) => {
    res.send('Hola NodesJS!');
});

export default app;
