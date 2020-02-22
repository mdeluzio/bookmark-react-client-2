import React from 'react';
import './BookmarkApp.css';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab';

class BookmarkApp extends React.Component {
    render() {
        return (
            <div className="BookmarkApp">
                <h2>Bookmarks</h2>
                <BookmarksList bookmarks={this.props.bookmarks} />
                <Fab />
            </div>       
        );
    };
}

export default BookmarkApp;