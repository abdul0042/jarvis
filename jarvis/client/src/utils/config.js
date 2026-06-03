// Central backend URL config.
// In development: reads from client/.env  → VITE_BACKEND_URL=http://localhost:5000
// In production:  set VITE_BACKEND_URL in Vercel → https://your-server.onrender.com (or Railway etc.)
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
