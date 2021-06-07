import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import SectionTitle from './SectionTitle';
import Button from './Button';
import aboutImg from '../assets/images/profile.jpeg';

const AboutSectionStyle = styled.div`
  padding: 20rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      margin-top: 2rem;
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        margin-top: 4px;
        width: 70%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle heading="About me" />
          <PText>
            I am a doctor who evolved <br />
            as a <span style={{ color: '#61dafb' }}>software developer</span>
            , seeking to improve the healthcare industry with my skills and
            knowledge in both fields.
            <br />
            <br />
            I'm also up for new challenges and to collaborate with innovative
            startups.
            <br />
            <br />
            Let's connect
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" lowMargin />
            <Button btnLink="/about" btnText="Read More" outline lowMargin />
          </div>
        </div>
        <div className="aboutSection__right">
          <img style={{ opacity: '0.9' }} src={aboutImg} alt="about img" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
