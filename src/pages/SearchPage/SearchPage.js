import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
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

  const searchItem = searchResults.map((book, index) => (
    <li key={index}>
      <Link to={`/book/${book.bookId}`}>{book.title}</Link>
    </li>
  ));

  return (
    <div>
      <h1 className="SearchTitle">Book Search:</h1>
      <input
        className="SearchInput"
        type="text"
        placeholder="Enter a book title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchResults.length > 0 && (
        <div>
          <h2 className="SearchH2">Search Results:</h2>

          {searchResults.map((book, index) => (
            <div className="searchList" key={index}>
              <Link className="Link" to={`/book/${book.bookId}`}>
                <div className="searchList">{book.title}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
