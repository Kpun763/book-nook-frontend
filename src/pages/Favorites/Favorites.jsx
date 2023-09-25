import FavoriteBookItem from "../../components/FavoriteBookItem/FavoriteBookItem";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const FavoritePage = ({}) => {
  const [user, token] = useAuth();
  console.log(token);
  const fetchFavoriteBooks = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/favorites", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.warn("Error in fetchFavoriteBook request: ", error);
    }
  };
  useEffect(() => {
    fetchFavoriteBooks();
  });

  return (
    <div>
      <ul>
        <li>
          <FavoriteBookItem />
        </li>
      </ul>
    </div>
  );
};

export default FavoritePage;
