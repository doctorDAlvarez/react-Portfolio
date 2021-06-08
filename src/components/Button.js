import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: ${(props) => (props.lowMargin ? '8rem' : '50rem')};
  .button {
    font-size: 2.2rem;
    background-color: ${(props) => (props.outline ? 'transparent' : 'white')};
    padding: 0.7em 2em;
    border-radius: 10px;
    display: inline-block;
    /* border: 0.5px solid white; */
    transition: 100ms ease all;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : '#023047')};
  }
  .button:hover {
    /* color: rgb(97, 218, 251, 0.6); */
    background-color: ${(props) =>
      props.outline ? 'rgb(97, 218, 251)' : 'antiquewhite'};
    color: ${(props) => (props.outline ? 'white' : '#282c34')};
    transition: 100ms ease all;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 10rem;
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
  lowMargin = false,
}) {
  return (
    <ButtonStyle
      outline={outline}
      lowMargin={lowMargin}
      className="button-wrapper"
    >
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
