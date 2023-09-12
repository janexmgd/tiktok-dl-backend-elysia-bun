import Elysia from './app/elysia.js';
import { cors } from '@elysiajs/cors';
const app = new Elysia();

app.use(cors());

export default app;
