import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicianQuiz from './MusicianQuiz';
import * as serviceWorker from './serviceWorker';

const artists = [
    {
        name: 'Whitney Houston', 
        imageUrl: '/images/whitney.jpg',
        imageSource: 'Wikipedia',
        albums: ['My Love is your Love']
    },
    {
        name: 'Amy Winehouse', 
        imageUrl: '/images/amy.jpg',
        imageSource: 'Wikipedia',
        albums: ['Back to Black']
    }
];

const state = {

    turnData: {
        artist: artists[0],
        albums: artists[0].albums
    }
};

ReactDOM.render(<MusicianQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
