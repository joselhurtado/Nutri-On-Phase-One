import React from 'react';
import "../../styles/home.css";


export const FormUser= () => {
    return (
        <div className="form-user">
            <input className="form-control" type="text" placeholder="Enter your First Name" required></input>
            <input className="form-control" type="email" placeholder="Enter your Last Name" required></input>
        </div>
        );
}

export default FormUser
