import React from "react";

const Employee = ({ name, surname, position, description, photo }) => {
  return (
    <li className="specialist-item">
      <img
        src={photo}
        alt={`${name} ${surname}`}
        className="specialist-photo"
      />
      <h3>
        {name} {surname}
      </h3>
      <p className="specialist-position">{position}</p>
      <p className="specialist-description">{description}</p>
    </li>
  );
};

export default Employee;
