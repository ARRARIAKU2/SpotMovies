import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Navbar() {
    return(
        <>
            <div class="topbar">
                <div class="prev-next-buttons">
                    <button type="button"><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button type="button"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                <div class="navbar">
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
                        <li class="divider">|</li>
                        <li>
                            <a href="#">Sign Up</a>
                        </li>
                    </ul>
                    <button type="button">Log In</button>
                </div>
            </div>
        </>
    )
};

export default Navbar;