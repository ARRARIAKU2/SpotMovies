import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlusSquare, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Sidebar({icon, title}) {
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <a href="#">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                            alt="Logo" />
                    </a>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faHome} size="xl" className="mr-3"/>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faSearch} size="xl" className="mr-3"/>
                                <span>SpotMusic</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faBook} size="xl" className="mr-3"/>
                                <span>SpotMovie</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faPlusSquare} size="xl" className="mr-3"/>
                                <span>Create Playlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} size="xl" className="mr-3"/>
                                <span>Liked Songs</span>
                            </a>
                        </li>
                        <li>
                            <Link to="users">
                                <FontAwesomeIcon icon={faUser} size="xl" className="mr-3"/>
                                <span>Users</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;