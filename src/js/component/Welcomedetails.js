import React from "react";
import reactDom from "react-dom";
import "../../styles/welcome.css";


export function Welcomedetails(props){
    return(
        <div className="welcome-details">
            <div className="welcome-details-content">
                <h3 className="welcome-details-title">
                    NutriON was created with one goal in mind. Make eating healthy simple, convenient, and fun. by using our application users can randomize recipes tailored to their diet and goals.
                    in addition we also help you keep track of your last meals and goals. 
                </h3>
            </div>
        </div>
    )
}

