import React from 'react';
import './App.css';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  };

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$ABbBxBUwD.DF7DFP8L8L7eSakrR2xM.Is1l0Kh8teoyTzxY5OuAHS",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp bookmarks={this.state.bookmarks} />
    ;

    return (
      <div className="App">
        {page}
      </div>
    );
  };
}

export default App;
