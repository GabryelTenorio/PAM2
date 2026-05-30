import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return React.createElement(
    'main',
    {
      style: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        background: '#f5f5f5',
      },
    },
    React.createElement(
      'section',
      {
        style: {
          textAlign: 'center',
          padding: '32px',
          borderRadius: '12px',
          background: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
      React.createElement('h1', null, 'Hello World'),
      React.createElement('p', null, 'Primeira tela do projeto PAM2')
    )
  );
}

createRoot(document.getElementById('root')).render(React.createElement(App));
