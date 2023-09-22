import { useState } from "react";

const ReviewForm = ({}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  return (
    <form>
      <div>
        <div>
          <h4>Leave a Review</h4>
        </div>
        <div>
          <input type="textarea" />
        </div>
        <div>
          <h5>Rating(1-5)</h5>
          <input />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
