import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 4rem; */
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      color: whitesmoke;
    }
    .hero__name {
      text-align: left;
      font-size: 13rem;
      font-family: 'Montserrat SemiBold';
      /* color: rgb(97, 218, 251, 0.6); */
      color: antiquewhite;
    }
  }
  .hero__img {
    max-width: 1200px;
    width: 100vw;
    height: 500px;
    margin: 0 auto;
    margin-top: 50px;
    opacity: 0.6;
    border: 1px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -30rem;
    .para {
      margin-left: 170px;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    bottom: 50px;
    width: 50px;
  }
  .hero__social {
    left: 10px;
    position: fixed;
  }
  .hero__scrollDown {
    right: 10px;
    position: absolute;
    bottom: 250px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      .container {
        margin: 2px 45px;
      }
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    /* .hero__img {
      height: 300px;
    } */
    .hero__info {
      margin-top: 3rem;
      .para {
        margin: 0 auto;
      }
    }
    .hero__social {
      margin-top: 2px;
      left: 0px;
      bottom: 0px;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          margin-top: 4px;
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 0rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      bottom: 2%;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            {/* <span>Hello and welcome!, my name is</span> */}
            <span className="hero__name">Diego Alvarez</span>
          </h1>
          {/* <div className="hero__img">
            <img src={HeroImg} alt="Hero" />
          </div> */}
          <div className="hero__info">
            <Button btnLink="/projects" btnText="my work" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/doctorDAlvarez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/doctorDAlvarez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/doctordalvarez/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
                <li>
                  <a
                    href="https://doctordalvarez.hashnode.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HN
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="scrolldown" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
