import React from 'react';

const App: React.FC = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        fontFamily: 'sans-serif',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Site Malf Mídia</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          O site está em construção. Volte em breve para conferir nossas novidades!
        </p>
      </div>
    </main>
  );
};

export default App;
