import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutItem from '../components/AboutItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: rgb(97, 218, 251, 0.3);
      color: antiquewhite;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid grey;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Diego Alvarez</span>
            </p>
            <h2 className="about__heading">A Software developer</h2>
            <div className="about__info">
              <PText>
                I' ve been working in the tech field for two years exclusively.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In at
                consectetur distinctio quas mollitia amet officiis ullam ipsa
                eos consequuntur fugit ex dicta iusto quia dolor, earum ipsam
                sunt blanditiis.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                aliquam dolorem autem eius aliquid illum ab id, unde nam nisi,
                fugiat laudantium mollitia iure! Non suscipit corrupti excepturi
                ipsam? Consectetur?
              </PText>
            </div>
            <Button btnText="Resume" btnLink="/" lowMargin />
          </div>
          <div className="rigth">
            <img src={AboutImg} alt="about img" />
          </div>
        </div>
        {/* <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutItem title="Front-end" items={['HTML']} />
            <AboutItem title="College" items={['University of buenos aires']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutItem title="School" items={['University of buenos aires']} />
            <AboutItem title="College" items={['University of buenos aires']} />
          </div> */}
        {/* </div> */}
      </div>
      {/* <ContactBanner /> */}
    </AboutPageStyles>
  );
}
