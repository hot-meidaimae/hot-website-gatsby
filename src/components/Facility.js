import React from "react";
import Card from "./UI/Card";

const Facility = (props) => (
  <>
    <div className="columns is-multiline">
      {props.facility.map((el) => (
        <div className="column is-12-mobile is-6-desktop" key={el.name}>
          <Card name={el.name} text={el.text} image={el.image} />
        </div>
      ))}
    </div>
  </>
);

export default Facility;
