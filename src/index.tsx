import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/css/index.css';
import App from './App.tsx';

const containerRoot = document.querySelector('#root');

if (!containerRoot) {
  console.error('Root undefined');
} else {
  const root = createRoot(containerRoot);
  root.render(
    <StrictMode>
    <App />
    </StrictMode>
  );
}
