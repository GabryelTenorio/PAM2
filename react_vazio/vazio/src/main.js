import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return React.createElement('main', null, React.createElement('h1', null, 'Projeto vazio'));
}

createRoot(document.getElementById('root')).render(React.createElement(App));
