import ReviewItem from "../ReviewItem/ReviewItem";
import "./ReviewList.css";
const ReviewList = ({ reviews = [], averageRating, title }) => {
  const reviewItems = reviews.map((review, index) => (
    <ReviewItem
      key={index}
      username={review.username}
      text={review.text}
      rating={review.rating}
    />
  ));
  console.log(reviewItems);
  return (
    <div>
      <div>
        <h3 className="titleReviews">{title}: Reviews</h3>
        <h3 className="avgRating">{averageRating}</h3>
      </div>
      <div className="reviews">{reviewItems}</div>
    </div>
  );
};

export default ReviewList;
