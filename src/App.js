import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(`Hooks + Grudges`);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="App">
      {title}
    </div>
  );
}

export default App;
