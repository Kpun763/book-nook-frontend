import Book from "../../components/Book/Book";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../../components/ReviewList/ReviewList";
import useAuth from "../../hooks/useAuth";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const BookDetailPage = ({}) => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    authors: [],
    description: "",
    thumbnailUrl: "",
  });
  const [user, token] = useAuth();

  const [reviews, setReviews] = useState([]);
  const [bookReviewData, setBookReviewData] = useState([]);

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

      setBookData(bookInfo);
    } catch (error) {
      console.warn("Error in fetchBook request: ", error);
    }
  };

  const fetchReviews = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/bookdetails/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response.data);

      const bookReviewData = response.data || [];
      setBookReviewData(bookReviewData);

      const bookReviews = response.data.reviews || [];

      if (bookReviews.length === 0) {
        // If there are no reviews, set a message in the reviews state
        setReviews([
          { text: "No book reviews available", rating: null, username: "N/A" },
        ]);
      } else {
        // If there are reviews, extract and set the review information
        const reviewInfoArray = bookReviews.map((review) => ({
          text: review.text || "No Text Available",
          rating: review.rating || null,
          username: review.user
            ? review.user.userName
            : "No Username Available",
        }));

        setReviews(reviewInfoArray);
      }
    } catch (error) {
      console.warn("Error in fetchReviews request: ", error);
    }
  };
  console.log(reviews);
  useEffect(() => {
    fetchBook();
    fetchReviews();
  }, [id]);

  const handleNewReview = async (onNewReview) => {
    try {
      const response = await axios.post(
        `https://localhost:5001/api/reviews`,
        onNewReview,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const updatedReviews = response.data;

      setReviews([...reviews, updatedReviews]);
      fetchReviews();
    } catch (error) {
      console.warn("Error in handleNewReview request: ", error);
    }
  };

  return (
    <div>
      <Book
        title={bookData.title}
        authors={bookData.authors}
        description={bookData.description}
        thumbnailUrl={bookData.thumbnailUrl}
      />
      <ReviewList
        reviews={reviews}
        title={bookData.title}
        averageRating={bookReviewData.averageRating}
      />
      <ReviewForm onNewReview={handleNewReview} bookId={id} />
    </div>
  );
};

export default BookDetailPage;
