import React from 'react';

function Turn({artist, albums, i}) {

    return(<div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
            <img src={artist.imageUrl} className="artistImage" alt="Artist"/>
        </div>
        <div className="col-6">
            {albums.map((title, i) => <p key={i}>{title}</p>)}
        </div>
    </div>);
}

export default Turn;