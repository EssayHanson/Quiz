import React from 'react';
import Album from '../components/Album';

function Turn({artist, albums}) {

    return(<div className="row turn" style={{backgroundColor: "white"}}>
        <div className="col-4 offset-1">
            <img src={artist.imageUrl} className="artistImage" alt="Artist"/>
        </div>
        <div className="col-6">
            {albums.map((title, i) => <Album key={i} title={title}/>)}
        </div>
    </div>);
}

export default Turn;