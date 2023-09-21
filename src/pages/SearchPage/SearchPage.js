import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const googleBookApiKey = "AIzaSyBZmkIqDVpw-NRuvGOjYm2TGGjEp-M1Bjo"; // The google Api Key

  useEffect(() => {
    if (searchQuery) {
      HandleSearch();
    }
  }, [searchQuery]);

  const HandleSearch = async () => {
    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleBookApiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const books = data.items.map((item) => ({
        title: item.volumeInfo.title,
        bookId: item.id,
      }));

      setSearchResults(books);
    } catch (error) {
      console.error("Error fetching data from google api: ", error);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        placeholder="Enter a book title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((book, index) => (
              <li key={index}>
                <Link to={`/book/${book.bookId}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
