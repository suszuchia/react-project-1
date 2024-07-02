import React from "react";
import Employee from "./Employee"; // Correctly import the Employee component

const specialists = [
  {
    name: "John",
    surname: "Doe",
    position: "IT department",
    description:
      "Experts in Information Technology (IT) are responsible for helping companies manage their technical systems and supporting technology users with troubleshooting assistance.",
    photo: "./assets/IT-Specialist.jpg",
  },
  {
    name: "John",
    surname: "Doe",
    position: "IT department",
    description:
      "Experts in Information Technology (IT) are responsible for helping companies manage their technical systems and supporting technology users with troubleshooting assistance.",
    photo: "./assets/IT-Specialist.jpg",
  },
];

const Specialists = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-heading">Our specialists</h2>
      <ul className="specialists-list">
        {specialists.map((specialist, index) => (
          <Employee key={index} {...specialist} />
        ))}
      </ul>
    </section>
  );
};

export default Specialists;
