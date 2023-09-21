import Book from "./Book";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBZmkIqDVpw-NRuvGOjYm2TGGjEp-M1Bjo`
      );
      console.log(response.data);
      console.log(response);
      setBook(response.data);
    } catch (error) {
      console.warn("Error in fetchBook request: ", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const bookDetails = book.filter((book) => (
    <Book
      key={book.id}
      title={book.title}
      arthurs={book.arthurs}
      description={book.description}
      smallThumbnailUrl={book.smallThumbnailUrl}
    />
  ));

  return <div>{bookDetails}</div>;
};

export default BookDetailPage;
