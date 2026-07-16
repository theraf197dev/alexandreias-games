import { Hono } from 'hono';
const app = new Hono();

app.get('/api', (c) => new Response(JSON.stringify({ name: 'Alexandre Ias' })));

export default app;