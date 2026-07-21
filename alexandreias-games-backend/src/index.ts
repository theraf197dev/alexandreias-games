import { Hono } from 'hono';
const app = new Hono();

app.get('/api', (c) => {
  return c.json({ name: 'Alexandre Ias' });
});

app.get('/api/translations', (c) => {
    return c.json({ name: 'Alexandre Ias' });
});

export default app;
