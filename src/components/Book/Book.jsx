import React from "react";
import "./Book.css";

const Book = ({
  thumbnailUrl,
  description,
  title,
  authors,
  OnClickFavorite,
  bookId,
  userId,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const favoriteData = {
      bookId,
      title,
      thumbnailUrl,
      userId,
    };

    OnClickFavorite(favoriteData);
  };

  return (
    <div>
      <div>
        <img
          className="thumbnail"
          src={thumbnailUrl}
          alt={`Thumbnail for Book ${title}`}
        />
        <div>
          <button className="favButton" onClick={handleSubmit}>
            Favorite
          </button>
        </div>
        <div>
          <h3>{title}</h3>
          <h4>Authors:</h4>
          <ul>
            {authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
