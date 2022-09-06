import React from "react";
import { Link } from "react-router-dom";

export const ButtonDiets = () => {
  return (
    <div className='d-flex justify-content-around mt-5 mb-5'>
        <div className="btn btn-orange">
          <span>All recipes</span>
        </div>
        <div className="btn btn-light">
          <span>Keto</span>
        </div>
        <div className="btn btn-light">
          <span>Paleo</span>
        </div>
        <div className="btn btn-light">
          <span>Vegan</span>
        </div>
        <div className="btn btn-light">
          <span>Vegetarian</span>
        </div>
        <div className="btn btn-light">
          <span>Pecetarian</span>
        </div>
        <div className="btn btn-light">
          <span>No Restrictions</span>
        </div>
      </div>
  );
};

export default ButtonDiets;
