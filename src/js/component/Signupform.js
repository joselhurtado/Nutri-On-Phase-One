import React from 'react';
import "../../styles/home.css";


export const FormUser= () => {
    return (
        <div className="form-user">
            <input className="form-control" type="text" placeholder="Enter your username" ></input>
            <input className="form-control" type="email" placeholder="Enter your password" ></input>
        </div>
        );
}

export default FormUser
