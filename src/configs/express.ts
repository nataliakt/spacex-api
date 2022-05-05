import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Bem-vindo!');
});

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`SpaceX API listening on port ${PORT}`);
});