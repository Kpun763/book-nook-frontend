const FavoriteBookItem = ({ thumbnailUrl, title, id }) => {
  return (
    <div>
      <div>
        <img src={thumbnailUrl} alt={`Thumbnail for Book ${title}`} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default FavoriteBookItem;
