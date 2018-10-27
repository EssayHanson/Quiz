import React from 'react';
import ReactDOM from 'react-dom';
import MusicianQuiz from './MusicianQuiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MusicianQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});
