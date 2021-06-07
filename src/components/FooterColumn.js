import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterColumn({
  heading = 'col heading',
  links = [
    {
      type: 'Link',
      title: 'home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'about',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((link, index) => (
          <li ley={index}>
            {link.type === 'Link' ? (
              <Link to={link.path}>{link.title}</Link>
            ) : (
              <a href={link.path} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
