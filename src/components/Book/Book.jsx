import React from "react";

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
        <img src={thumbnailUrl} alt={`Thumbnail for Book ${title}`} />
        <div>
          <button onClick={handleSubmit}>Favorite</button>
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
