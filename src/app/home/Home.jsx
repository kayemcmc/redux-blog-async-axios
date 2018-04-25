/**
 * @overview Home page.  Renders static content.
 */
import React from 'react';
import Posts from '../posts/Posts'

// Render static HTML:
import __html from './home.html';

const Home = () => (
    <div>
    <div dangerouslySetInnerHTML={{ __html }} />
    <Posts />
    </div>
);

export default Home;
