import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import ListCard from "../../Components/ListCard";

function Home() {
    return (
        <>
            <Sidebar />
            <div className="main-container">
                <Navbar />
                <ListCard />
            </div>
            <div>
                <h1>Home</h1>
                <Link to="/users">Users</Link>
            </div>

        </>
    )
}

export default Home;