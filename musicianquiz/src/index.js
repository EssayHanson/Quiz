import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicianQuiz from './MusicianQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const artists = [
    {
        name: 'Whitney Houston', 
        imageUrl: '/images/whitney.jpg',
        imageSource: 'Wikipedia',
        albums: [
            'My Love is your Love',
            'I Look to You',
            'I Will Always Love You'
        ]
    },
    {
        name: 'Amy Winehouse', 
        imageUrl: '/images/amy.jpg',
        imageSource: 'Wikipedia',
        albums: [
            'Back to Black', 
            'Frank', 
            'Lioness'
        ]
    }
];

function getTurnData(artists) {

    const allAlbums = artists.reduce(function(p, c, i) {
        return p.concat(c.albums);
    }, []);

    const fourRandomAlbums = shuffle(allAlbums).slice(0,4);
    const answer = sample(fourRandomAlbums);

    return {

        albums: fourRandomAlbums,
        artist: artists.find((artist) => 
            artist.albums.some((title) =>
                title === answer))
    }
}

const state = {

    turnData: getTurnData(artists) 
};

ReactDOM.render(<MusicianQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
