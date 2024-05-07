import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define styled components
const AppContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #333;
  transition: color 0.5s;

  &:hover {
    color: #007bff; /* Change color on hover */
  }
`;

const Section = styled(motion.section)`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  transition: all 0.5s;

  &:hover {
    background: #f1f1f1; /* Change background on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Emoji = styled.span`
  font-size: 2rem;
  margin-right: 10px;
`;

const projectsVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const App = () => {
  const [color, setColor] = useState('#ff6347'); // Initial color state

  return (
    <AppContainer>
      <Title
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setColor(color === '#ff6347' ? '#32cd32' : '#ff6347')} // Toggle color on click
        style={{ color }}
      >
        🌈 Welcome to My Interactive Portfolio!
      </Title>

      <Section initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2>About Me</h2>
        <p>
          <Emoji>👋</Emoji> I'm an aspiring UX designer studying at UCSD, and I
          love creating user-friendly experiences.
        </p>
      </Section>

      <Section
        variants={projectsVariant}
        initial="hidden"
        animate="visible"
      >
        <h2>Projects</h2>
        <p>
          <Emoji>💻</Emoji> Here are some projects I've worked on:
        </p>
        <ul>
          <li>Project 1: Redesigning a website for a local business</li>
          <li>Project 2: Creating a mobile app for task management</li>
        </ul>
      </Section>

      <Section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        <h2>Contact</h2>
        <p>
          <Emoji>📧</Emoji> If you'd like to get in touch, here's my email:
          bridijana@gmail.com
        </p>
      </Section>
    </AppContainer>
  );
};

export default App;
