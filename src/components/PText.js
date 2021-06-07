import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  color: white;
  /* margin-left: 170px; */
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin: 0 auto;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p style={{ color: 'white' }}>{children}</p>
    </PStyle>
  );
}
