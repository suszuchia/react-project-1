import React from "react";

const Offer = ({ name, isNew }) => {
  return (
    <div className="service-item">
      {name}
      {isNew && (
        <div>
          <p className="service-item-special-text">( new! )</p>
          <span className="new-service-dot"></span>
        </div>
      )}
    </div>
  );
};

export default Offer;
