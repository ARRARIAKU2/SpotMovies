import React from "react";

function Youtube({videoID, videoTitle}) {
    return (
        <iframe 
        width="560" 
        height="315" 
        src={videoID} 
        title={videoTitle} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    )
};

export default Youtube;