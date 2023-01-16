import React from "react";  
import "../../styles/subcss/banner.css"
export function Banner( ){
    return(
        <div className="banner">
            <div className="containerBanner">
                <div className="leftBanner">
                    <h1>Canon Camera</h1>
                    <div className="leftButton">
                        <button className="leftBtn">Shop Now</button>
                        <button className="rightBtn">View More</button>
                    </div>
                 </div>
                <div className="rightBanner">
                    <img src="Camera.png" alt="Banner" />
                </div>
                
            </div>
        </div>
    );
}