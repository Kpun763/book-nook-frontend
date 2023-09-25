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
          <h3 className="title">{title}</h3>
          <h4 className="authors">Authors:</h4>
          <ul className="authorsUL">
            {authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
