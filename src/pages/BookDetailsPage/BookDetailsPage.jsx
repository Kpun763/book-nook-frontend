import Book from "./Book";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    authors: [],
    description: "",
    thumbnailUrl: "",
  });

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBZmkIqDVpw-NRuvGOjYm2TGGjEp-M1Bjo`
      );

      const volumeInfo = response.data.volumeInfo || {};
      const bookInfo = {
        title: volumeInfo.title || "No Title Available",
        authors: volumeInfo.authors || [],
        description: volumeInfo.description || "No description available",
        thumbnailUrl: volumeInfo.imageLinks.smallThumbnail || "",
      };

      console.log(bookInfo);
      setBookData(bookInfo);
    } catch (error) {
      console.warn("Error in fetchBook request: ", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  return (
    <div>
      <Book
        title={bookData.title}
        authors={bookData.authors}
        description={bookData.description}
        thumbnailUrl={bookData.thumbnailUrl}
      />
    </div>
  );
};

export default BookDetailPage;
