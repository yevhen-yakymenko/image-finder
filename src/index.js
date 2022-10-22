import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);
