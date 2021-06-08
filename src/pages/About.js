import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/team.jpeg';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
            <h2 className="about__heading">A software developer</h2>
            <div className="about__info">
              <PText>
                I've been working with teams and groups of people for ten years,
                mentored residents and be the leader of simulator training in
                anesthesiology. <br />
                <br />
                I' am used to stressfull conditions like the operating room
                enviroment, and assume an active role when problems must be
                address rapidly. <br />
                <br /> I've got experience in a big company training their
                employees in ACLS and achieved great results with the HR
                department in cardiac arrest management in the factory. <br />
                <br />
                I love to learn by teaching and doing.
                <br />
                <br />
                Now I am looking to apply my coding and tech skills and try to
                improve the healthcare industry, developing innovative tools and
                resources for the daily work of physicians.
                <br />
                <br />
                I also want to collaborate with startups and companies that
                could make use of my help.
                <br />
                <br />
                Thanks for visiting.
                <br />
                <br />
                @doc
              </PText>
            </div>
            {/* <Button btnText="Resume" btnLink="/" lowMargin /> */}
          </div>
          <div className="right">
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
