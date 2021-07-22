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
            Hi there!<br />
            as a <span style={{ color: '#61dafb' }}>software developer</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et molestiae placeat suscipit aut sint illum. Animi fuga commodi, at libero exercitationem qui ducimus ipsam eius officiis ex assumenda, hic natus.
            <br />
            <br />
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque, unde cum omnis, maiores, esse illum adipisci asperiores incidunt minima consectetur. Architecto velit a quibusdam et dolor animi ipsa rem.
            <br />
            <br />
            Let's connect
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="#" btnText="Resume" lowMargin download />
            <Button btnLink="/about" btnText="Read More" outline lowMargin />
          </div>
        </div>
        <div className="aboutSection__right">
          <img style={{ opacity: '0.9' }} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="about img" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
