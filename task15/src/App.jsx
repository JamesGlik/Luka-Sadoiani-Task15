import React from 'react';
import NewsletterCard from './components/organisms/NewsletterCard';

const App = () => (
  <div style={{
    backgroundColor: '#36384D',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }}>
    <NewsletterCard />
  </div>
);

export default App;