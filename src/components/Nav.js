import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav=({isOpenLibrary,setIsOpenLibrary})=>{
    const libraryHandler=()=>{
        return(
    setIsOpenLibrary(!isOpenLibrary)
    );
    };
    return(
        <div className="nav-main">
            <div className="nav-container">
            <h1>Waves</h1>
            <button onClick={libraryHandler}>Library 
                <FontAwesomeIcon icon={faMusic} />
            </button>
            </div>
        </div>
    );
};
export default Nav;