import React, { useState, useEffect } from "react";

const Book = ({ thumbnailUrl, description, title, arthur }) => {
  return (
    <div>
      <div>
        <img src={thumbnailUrl} alt={`Thumbnail for Book ${title}`} />
        <div>
          <button>Favorite</button>
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{arthur}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
