import { createRoot } from 'react-dom/client'
import './index.css';
import Provider from './spa/Provider';

createRoot(document.getElementById('root')!).render(
  <>
    <Provider />
  </>,
)
