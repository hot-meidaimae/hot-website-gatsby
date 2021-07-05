import React from "react";
import { FluidObject } from "gatsby-image";

import Card from "./UI/Card";

type Props = {
  facility: {
    name: string;
    text: string;
    image: { childImageSharp: { fluid: FluidObject } } | string;
  }[];
};

const Facility: React.FC<Props> = (props) => (
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
