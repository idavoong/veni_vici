/* eslint-disable react/prop-types */
import "/src/App.css";

const BanList = ({ banAttributes, removeBan}) => {
    return(
        <div className="banList">
        <h1>Ban List</h1>
        <h3>Select an attribute in your listing to ban it</h3>
        <div className="listContainer">
          {banAttributes.map((item, index) => (
            <li className="listItem" key={index}>
              <button className="ban" id={item} onClick={removeBan}>
                {item}
              </button>
            </li>
          ))}
        </div>
      </div>
    );
}

export default BanList;