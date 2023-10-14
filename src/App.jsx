import { useState, useEffect } from "react";
import BanList from "/components/BanList";
import Cat from "/components/Cat";
import "./App.css";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentAttributes, setCurrentAttributes] = useState({
    breed: "",
    origin: "",
    lifeSpan: "",
  });
  const [banAttributes, setBanAttributes] = useState([]);

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    if (json[0] == null) {
      alert("Fetch failed");
    }
    setCurrentImage(json[0].url);
    setCurrentAttributes({
      breed: json[0].breeds[0].name,
      origin: json[0].breeds[0].origin,
      lifeSpan: json[0].breeds[0].life_span,
    });
  };

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=${1}`;
    callAPI(query).catch(console.error);
  };

  useEffect(() => {
    if(banAttributes.includes(currentAttributes.breed)){
      makeQuery();
    } else if (banAttributes.includes(currentAttributes.origin)){
      makeQuery();
    } else if (banAttributes.includes(currentAttributes.lifeSpan)) {
      makeQuery();
    }
  }, [currentAttributes])

  const handleBan = (e) => {
    if (!banAttributes.includes(e.target.id)) {
      setBanAttributes((attributes) => [...attributes, e.target.id]);
    }
  };

  const handleRemoveBan = (e) => {
    setBanAttributes(
      banAttributes.filter(function (attribute) {
        return attribute != e.target.id;
      })
    );
  };

  return (
    <>
      <div className="discover">
        <h1>Veni Vici!</h1>
        <h3>Discover cats from your wildest dreams!</h3>
        <Cat attributes={currentAttributes} image={currentImage} ban={handleBan}/>
        <button className="randomizer" onClick={makeQuery}>
          Discover
        </button>
        <BanList banAttributes={banAttributes} removeBan={handleRemoveBan}/>
      </div>
    </>
  );
}

export default App;
