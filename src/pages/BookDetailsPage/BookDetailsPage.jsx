import Book from "./Book";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
  const { id } = useParams();

  const fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyBZmkIqDVpw-NRuvGOjYm2TGGjEp-M1Bjo`
      );
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.warn("Error in fetchBook request: ", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <Book />
    </div>
  );
};

export default BookDetailPage;
