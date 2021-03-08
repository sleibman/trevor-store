import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const { addToOrder, index } = this.props;
    /*
    Above is ES6 hotshotpants equivalent to:
        const image = this.props.details.image;
        const name = this.props.details.name;
    */
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name}></img>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => addToOrder(index)}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
