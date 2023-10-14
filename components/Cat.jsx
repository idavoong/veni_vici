/* eslint-disable react/prop-types */
import "/src/App.css";

const Cat = ({ attributes, image, ban}) => {
  return (
    <>
      <div className="attributes">
        {attributes.breed && (
          <button
            className="breed"
            id={attributes.breed}
            onClick={ban}
          >
            {attributes.breed}
          </button>
        )}
        {attributes.origin && (
          <button
            className="origin"
            id={attributes.origin}
            onClick={ban}
          >
            {attributes.origin}
          </button>
        )}
        {attributes.lifeSpan && (
          <button
            className="lifeSpan"
            id={attributes.lifeSpan}
            onClick={ban}
          >
            {attributes.lifeSpan}
          </button>
        )}
      </div>
      <div className="cats">{image && <img src={image} />}</div>
    </>
  );
};

export default Cat;
