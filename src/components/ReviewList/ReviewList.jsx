import ReviewItem from "../ReviewItem/ReviewItem";
const ReviewList = ({ reviews = [], AvgRating }) => {
  const reviewItems = reviews.map((review) => (
    <ReviewItem
      key={review.username}
      username={review.username}
      text={review.text}
      rating={review.rating}
    />
  ));

  return (
    <div>
      <div>
        <h3>{title}: Reviews</h3>
        <h3>{AvgRating}</h3>
      </div>
      <ReviewItem />
    </div>
  );
};

export default ReviewList;
