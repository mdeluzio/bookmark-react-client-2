import React from 'react';
import './App.css';
import AddBookmark from './AddBookmark/AddBookmark';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddBookmark />
      </div>
    );
  };
}

export default App;
