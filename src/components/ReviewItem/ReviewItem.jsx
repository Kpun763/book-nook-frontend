const ReviewItem = ({ username, text, rating }) => {
  return (
    <div>
      <div>
        <h4>
          {username} : {rating} Star
        </h4>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
