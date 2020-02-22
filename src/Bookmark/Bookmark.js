import React from 'react';
import './Bookmark.css';
import Rating from '../Rating/Rating';

export default function Bookmark(props) {
    return (
        <div className="Bookmark">
            <div className="Bookmark__row">
                <div className="Bookmark__title">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.title}
                    </a>
                </div>
                <Rating value={props.rating} />
            </div>
            <div className="bookmark__description">
                {props.description}
            </div>
        </div>
    );
}