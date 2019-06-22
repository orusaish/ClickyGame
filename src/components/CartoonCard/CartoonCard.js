//sets up the reusable FriendCard component
import React from "react";
import "./CartoonCard.css";

//pass the image into each card so all 12 are rendered
const CartoonCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img
        alt={props.image.replace(".jpg", "")}
        src={require("../../images/" + props.image)}
        height="150"
        width="200"
      />
    </div>
  </div>
);

export default CartoonCard;
