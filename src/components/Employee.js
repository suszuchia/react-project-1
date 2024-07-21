import React from "react";

const Employee = ({ name, position, photo }) => {
  return (
    <li className="specialist-list-item">
      <img src={photo} alt={`${name}'s photo`} className="specialist-image" />
      <div className="specialist-details">
        <h3 className="specialist-name">
          {name} [ {position} ]
        </h3>
        <p className="specialist-description">
          Experts in Information Technology (IT) are responsible for helping
          companies manage their technical systems and supporting technology
          users with troubleshooting assistance.
        </p>
      </div>
    </li>
  );
};

export default Employee;
