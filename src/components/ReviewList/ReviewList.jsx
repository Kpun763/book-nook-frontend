import ReviewItem from "../ReviewItem/ReviewItem";
const ReviewList = ({ reviews = [], averageRating, title }) => {
  const reviewItems = reviews.map((review) => (
    <ReviewItem
      key={review.id}
      username={review.username}
      text={review.text}
      rating={review.rating}
    />
  ));

  return (
    <div>
      <div>
        <h3>{title}: Reviews</h3>
        <h3>{averageRating}</h3>
      </div>
      {reviewItems}
    </div>
  );
};

export default ReviewList;
