import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function ListCard() {
    return (
        <>
            <div class="spotify-playlists">
                <h2>Popular</h2>

                <div className="list">
                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>Today's Top Hits</h4>
                        <p>Rema & Selena Gomez are on top of the...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>RapCaviar</h4>
                        <p>New Music from Lil Baby, Juice WRLD an...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>All out 2010s</h4>
                        <p>The biggest spmgs pf tje 2010s. Cover:...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>Rock Classics</h4>
                        <p>Rock Legends & epic songs that continue t...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>Chill Hits</h4>
                        <p>Kick back to the best new and recent chill...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>Viva Latino</h4>
                        <p>Today's top Latin hits elevando nuestra...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>Mega Hit Mix</h4>
                        <p>A mega mix of 75 favorites from the last...</p>
                    </div>

                    <div class="item">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebf173136b94ae2f75f49f8b2b" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>All out 80s</h4>
                        <p>The biggest songs of the 1090s.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListCard;