import React from "react";
import reactDom from "react-dom";
import "../../styles/welcome.css";
import Hero from "./hero";


export function NewUser(props){
    return(
        <div className="containerForm">
            <div className="Formhead">
                <h3 className="hform">Lets begin!</h3>
            </div>
            <div className="Formbody">
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Sign up</button>
            </div>
            <div className="Formmidsection">
                    
            </div>
        </div>
    )
}