import React from "react";
import { Link } from "react-router-dom";
import "./FavoriteBook.css";

const FavoriteBookItem = ({ thumbnailUrl, title, bookId }) => {
  return (
    <Link className="Link" to={`/book/${bookId}`}>
      <div>
        <div>
          <img
            className="thumbnail"
            src={thumbnailUrl}
            alt={`Thumbnail for Book ${title}`}
          />
        </div>
        <div>
          <h2 className="titleText">{title}</h2>
        </div>
        <hr />
      </div>
    </Link>
  );
};

export default FavoriteBookItem;
