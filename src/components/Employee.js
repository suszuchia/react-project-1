import React from "react";

const Employee = ({ name, surname, position, description, photo }) => {
  return (
    <li className="specialist-list-item">
      <img
        className="specialist-image"
        src={photo}
        alt={`Specialist ${name} ${surname}`}
      />
      <div className="specialist-details">
        <h3 className="specialist-name">
          {name} {surname} [ {position} ]
        </h3>
        <p className="specialist-description">{description}</p>
      </div>
    </li>
  );
};

export default Employee;
