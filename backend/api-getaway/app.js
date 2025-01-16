import dotenv from 'dotenv';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app = express();

app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
);

app.use(
  '/api/products',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  })
);

const port = 3003;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
