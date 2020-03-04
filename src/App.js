import React from 'react';
import './App.css';
import LazyLoadImage from 'components/LazyLoadImage';
import { carouselProps } from 'pages/intuit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello</p>
        {
          carouselProps.map(({
            imageUrl,
            imageAlt,
          }) => (
            <LazyLoadImage
              key={imageUrl}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
            />
          ))
        }
      </header>
    </div>
  );
}

export default App;
