import React from "react";

const Book = ({ thumbnailUrl, description, title, authors }) => {
  return (
    <div>
      <div>
        <img src={thumbnailUrl} alt={`Thumbnail for Book ${title}`} />
        <div>
          <button>Favorite</button>
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
