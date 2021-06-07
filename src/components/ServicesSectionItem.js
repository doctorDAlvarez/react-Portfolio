import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  flex-basis: 300px;
  color: white;
  .servicesItem__icon {
    color: rgb(97, 218, 251, 0.6);
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
    color: rgb(97, 218, 251, 0.6);
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <FaReact />,
  title = 'React',
  description = `Create, build, test and deploy. Certificate program with Ryan Florence - 2021`,
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{description}</PText>
    </ItemStyles>
  );
}
