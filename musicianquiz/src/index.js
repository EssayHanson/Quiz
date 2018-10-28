import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicianQuiz from './MusicianQuiz';
import * as serviceWorker from './serviceWorker';

const artists = [
    {
        name: 'Kanye West', 
        imageUrl: '../../public/images/whitney.jpg',
        imageSource: 'Google images',
        albums: ['The College Dropout']
    },
    {
        name: 'Amy Winehouse', 
        imageUrl: '../../public/images/Amy.jpg',
        imageSource: 'Google images',
        albums: ['Back to Black']
    },
    {
        name: 'Whitney Houston', 
        imageUrl: '../../public/images/whitney.jpg',
        imageSource: 'Google images',
        albums: ['Bodyguard']
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
