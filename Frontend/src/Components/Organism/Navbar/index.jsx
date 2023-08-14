import React from "react";

import Button from "../../Atom/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Navbar() {
    return(
        <>
            <div className="topbar">
                <div className="prev-next-buttons">
                    <Button className={"bg-[090909]"} content={<FontAwesomeIcon icon={faChevronLeft}/>} />
                    <Button className={"bg-[090909]"} content={<FontAwesomeIcon icon={faChevronRight} />} />
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="#">Premium</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li className="divider">|</li>
                        <li>
                            <a href="#">Sign Up</a>
                        </li>
                    </ul>
                    <Button className={"bg-[ffffff]"} content={"Login"} />
                </div>
            </div>
        </> 
    )
};

export default Navbar;