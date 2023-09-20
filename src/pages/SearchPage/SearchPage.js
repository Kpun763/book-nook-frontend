import React from "react";
import { useEffect, useState } from "react";

const SearchPage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const googleBookApiKey = "AIzaSyBZmkIqDVpw-NRuvGOjYm2TGGjEp-M1Bjo"; //The google Api Key

  const HandleSearch = async () => {
    try {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${googleBookApiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const bookTitles = data.items.map((items) => items.volumeInfo.title);

      setSearchResults(bookTitles);
    } catch (error) {
      console.error("Error fetching data from google api: ", error);
    }

    useEffect(() => {
      if (searchQuery) {
        HandleSearch();
      }
    }, [searchQuery]);
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
      <button onClick={HandleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
