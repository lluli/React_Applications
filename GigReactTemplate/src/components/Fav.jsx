import React, { useState } from "../../../ReactTemplateForms/node_modules/@types/react";

const FavouriteButton = ({ band, onFavourite }) => {
  const [isFavourite, setIsFavourite] = useState(band.isFavourite);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    onFavourite(band.name); // Call the onFavourite function with the band name
  };

  return (
    <button onClick={toggleFavourite}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default FavouriteButton;
