import React from 'react';

const App = () => {
  return (
    <div>
      <h1>My Portfolio</h1>  
      <p>Welcome to my portfolio!</p>  

      {/* About Section */}
      <section>
        <h2>About Me</h2>
        <p>
          I'm an aspiring ux designer studying at ucsd
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <p>Here are some projects I've worked on:</p>
        <ul>
          <li>Project 1: </li>
          <li>Project 2: </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2>Contact</h2>
        <p>If you'd like to get in touch, here's my email: bridijana@gmail.com</p>
      </section>
    </div>
  );
};

export default App;
