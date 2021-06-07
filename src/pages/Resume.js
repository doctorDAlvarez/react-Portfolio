import React from 'react';
import styled from 'styled-components';
import resume from '../assets/diegoalvarezCV.pdf';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <iframe title="pdf" src={resume} width="100%" height="1000px" />
      </div>
    </AboutPageStyles>
  );
}
