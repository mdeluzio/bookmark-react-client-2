import React from 'react';
import './BookmarksList.css';
import Bookmark from '../Bookmark/Bookmark';

class BookmarksList extends React.Component {
    static defaultProps = {
        bookmarks: []
    };

    render() {
        const bookmarks = this.props.bookmarks
            .map((bookmark, i) => <Bookmark { ...bookmark } key={i} />)
        ;
        return (
            <div className="BookmarksList">
                {bookmarks}
            </div>
        );
    };
}

export default BookmarksList;