import FavoriteBookItem from "../../components/FavoriteBookItem/FavoriteBookItem";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const FavoritePage = ({}) => {
  const [user, token] = useAuth();
  const fetchFavoriteBooks = async () => {
    try {
      const response = await axios.get("https://localhost:5001/api/favorites", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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
