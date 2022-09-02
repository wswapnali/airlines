import React from "react";
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="text-center">
                {`Copyright © Code ${year}`}
            </p>
        </div>
    )
}

export default Footer