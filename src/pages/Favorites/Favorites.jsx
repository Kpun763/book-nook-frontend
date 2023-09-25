import FavoriteBookItem from "../../components/FavoriteBookItem/FavoriteBookItem";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const FavoritePage = ({}) => {
  const [user, token] = useAuth();
  const [favoriteBooks, setfavoriteBooks] = useState([]);
  const favoriteItems = favoriteBooks.map((favorite) => (
    <FavoriteBookItem
      key={favorite.title}
      title={favorite.title}
      thumbnailUrl={favorite.thumbnailUrl}
      bookId={favorite.bookId}
    />
  ));
  const fetchFavoriteBooks = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/favorites", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setfavoriteBooks(response.data);
    } catch (error) {
      console.warn("Error in fetchFavoriteBook request: ", error);
    }
  };
  useEffect(() => {
    fetchFavoriteBooks();
  });

  return (
    <div>
      <ul>{favoriteItems}</ul>
    </div>
  );
};

export default FavoritePage;
