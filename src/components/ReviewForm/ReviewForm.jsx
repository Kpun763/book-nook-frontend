import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ onNewReview, bookId }) => {
  const [text, setText] = useState("");
  const [Rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bookId,
      text,
      Rating,
    };
    console.log(formData);
    onNewReview(formData);
  };

  return (
    <form className="reviewform" onSubmit={handleSubmit}>
      <div>
        <div>
          <h4>Leave a Review</h4>
        </div>
        <div>
          <input
            className="review"
            type="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h5>Rating(1-5)</h5>
          <input value={Rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
