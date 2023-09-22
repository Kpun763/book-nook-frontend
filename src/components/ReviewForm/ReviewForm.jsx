import { useState } from "react";

const ReviewForm = ({ onNewReview }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      text,
      rating,
    };
    console.log(formData);
    onNewReview(formData);
  };

  return (
    <form>
      <div>
        <div>
          <h4>Leave a Review</h4>
        </div>
        <div>
          <input
            type="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h5>Rating(1-5)</h5>
          <input value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
