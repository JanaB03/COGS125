import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components for a consistent style across the portfolio
const Container = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
`;

const Section = styled(motion.section)`
  margin: 20px 0;
`;

const Heading = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  color: #495057;
`;

const List = styled(motion.ul)`
  list-style-type: square;
  padding-left: 20px;
`;

const ListItem = styled(motion.li)`
  font-size: 1.1rem;
`;

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const App = () => {
  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.h1>My Portfolio</motion.h1>
        <Paragraph>Welcome to my portfolio!</Paragraph>
      </motion.div>

      {/* About Section */}
      <Section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>About Me</Heading>
        <Paragraph>
          I'm an aspiring UX designer studying at UCSD. I love creating user-friendly and engaging experiences.
        </Paragraph>
      </Section>

      {/* Projects Section */}
      <Section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Projects</Heading>
        <Paragraph>Here are some projects I've worked on:</Paragraph>
        <List>
          <ListItem>Project 1: Redesigning a website for a local business</ListItem>
          <ListItem>Project 2: Creating a mobile app for task management</ListItem>
        </List>
      </Section>

      {/* Contact Section */}
      <Section
        variants={contactVariants}
        initial="hidden"
        animate="visible"
      >
        <Heading>Contact</Heading>
        <Paragraph>If you'd like to get in touch, here's my email: bridijana@gmail.com</Paragraph>
      </Section>
    </Container>
  );
};

export default App;
