import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, name, flags } = props.country;
  //   console.log(props.country);
  return (
    <div className="country">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Region: {region}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
