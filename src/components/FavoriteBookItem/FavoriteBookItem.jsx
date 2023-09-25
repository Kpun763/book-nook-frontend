import React from "react";
import { Link } from "react-router-dom";

const FavoriteBookItem = ({ thumbnailUrl, title, bookId }) => {
  return (
    <Link to={`/book/${bookId}`}>
      <ul>
        <div>
          <div>
            <img src={thumbnailUrl} alt={`Thumbnail for Book ${title}`} />
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      </ul>
    </Link>
  );
};

export default FavoriteBookItem;
