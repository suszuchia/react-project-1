import React from "react";
import Offer from "./Offer";

const offers = [
  { name: "Service 1", isNew: true },
  { name: "Service 2", isNew: false },
  { name: "Service 3", isNew: false },
  { name: "Service 4", isNew: false },
  { name: "Service 5", isNew: false },
  { name: "Service 6", isNew: false },
];

const Service = () => {
  return (
    <section id="service" className="section blue-section">
      <div className="container">
        <h2 className="section-heading white-heading">
          What our company does?
        </h2>
        <div className="services-grid">
          {offers.map((offer, index) => (
            <Offer key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
