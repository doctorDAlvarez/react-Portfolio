import React from 'react';
import { DiGithub } from 'react-icons/di';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { SiHashnode } from 'react-icons/si';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle heading="Contact" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+54-113-113-0503" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="doctordalvarez@protonmail.com"
            />
            <a href="https://twitter.com/doctorDAlvarez">
              <ContactInfoItem icon={<FaTwitter />} text="Twitter Profile" />
            </a>
          </div>
          <div className="left">
            <a href="https://github.com/doctordalvarez">
              <ContactInfoItem icon={<DiGithub />} text="Github Profile" />
            </a>
            <a href="https://www.linkedin.com/in/doctordalvarez/">
              <ContactInfoItem icon={<FaLinkedin />} text="Linkedin Profile" />
            </a>
            <a href="https://doctordalvarez.hashnode.dev/">
              <ContactInfoItem
                icon={<SiHashnode />}
                text="Hashnode Personal Blog"
              />
            </a>
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
