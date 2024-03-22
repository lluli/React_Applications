import React, { useState } from "../../ReactTemplateForms/node_modules/@types/react";
import Gig from "./components/Gig";
import FavouriteButton from "./components/Fav";
import Lana from "./assets/Lana.webp"
import StillWoozy from "./assets/StillWoozy.jpeg"

function App() {
  const [bands, setBands] = useState([
    { name: 'Lana', image: Lana, description: 'A show', timedate: '22/03 9pm', location: 'The Moon', isFavourite: false },
    { name: 'Still Woozy', image: StillWoozy, description: 'Another show', timedate: '21/03 9pm', location: 'The Sun', isFavourite: false },
    { name: 'Ledia', image: StillWoozy, description: 'Another show', timedate: '21/03 9pm', location: 'The Sun', isFavourite: false },
    { name: 'Lizzy', image: StillWoozy, description: 'Another show', timedate: '21/03 9pm', location: 'The Sun', isFavourite: false }

  ]);

  const handleFavourite = (bandName) => {
    setBands(prevBands => {
      const updatedBands = prevBands.map(band => {
        if (band.name === bandName) {
          return { ...band, isFavourite: !band.isFavourite };
        }
        return band;
      });
      const sortedBands = updatedBands.sort((a, b) => (b.isFavourite ? 1 : 0) - (a.isFavourite ? 1 : 0));
      return sortedBands;
    });
  };

  return (
    <div className="app">
      {bands.map((band) => (
        <div key={band.name}>
          <Gig {...band} />
          <FavouriteButton band={band} onFavourite={handleFavourite} />
        </div>
      ))}
    </div>
  );
}

export default App;