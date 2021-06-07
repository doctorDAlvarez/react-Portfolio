import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: coral;
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__car__heading">Here is Me!</h3>
          <PText>Buenos Aires, Argentina.</PText>
          <a
            className="map__card__link"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Buenos+Aires/@-34.6156625,-58.5033384,12z/data=!3m1!4b1!4m5!3m4!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
