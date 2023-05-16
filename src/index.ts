import express from 'express';
import { NODE_ENV, PORT } from './config/config';

const app = express();

app.listen ( PORT, () => {
    console.log(`API running on Mode:${NODE_ENV} Port:${PORT}`, process.env.NODE_ENV);
});