import React, { useState, useEffect } from "react";

const Book = ({ bookId, thumbNailUrl, summary }) => {
  return (
    <div>
      <div>
        <img
          src="https://musicart.xboxlive.com/7/4dd01000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
          alt="The Hobbit"
        />
        <div>
          <button>Favorite</button>
        </div>
        <div>
          <h3>The Hobbit</h3>
          <h4>JRR Tolkien</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
