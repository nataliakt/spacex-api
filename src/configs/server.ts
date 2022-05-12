import express from 'express';
import cors from 'cors';
import launchesRoutes from '../routes/launches';
import homeRoutes from '../routes/home';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/launches', launchesRoutes);
app.use('/home', homeRoutes);

app.use('/', (req, res) => {
  res.status(200).send('SpaceX API is up and running!');
});

app.listen(PORT, () => {
  console.log(`SpaceX API listening on port ${PORT}`);
});