import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Skill />, document.getElementById('skill-App'));
ReactDOM.render(<Project />, document.getElementById('project-App'));
ReactDOM.render(<Contact />, document.getElementById('contact-App'));

registerServiceWorker();
