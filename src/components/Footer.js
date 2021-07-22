import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const FooterStyles = styled.div`
  padding: 2rem;

  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: #282c34;
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      {/* <div className="container"> */}
      {/* <div className="footer__col1">
          <h1 className="footer__col1__title">Name</h1>
          <PText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            facere. Atque officiis porro alias quasi dolor consequatur nostrum,
            corrupti modi!
          </PText>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: '+54-113-113-0503',
                path: 'tel:+54-113-113-0503',
              },
              {
                title: 'doctordalvarez@protonmail.com',
                path: 'mailto:doctordalvarez@protonmail.com',
              },
              {
                title: 'Buenos Aires, Argentina.',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social"
            links={[
              {
                title: 'Twitter',
                path: 'https://twitter.com/doctorDAlvarez',
              },
              {
                title: 'Github',
                path: 'https://github.com/doctorDAlvarez',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/doctordalvarez/',
              },
              {
                title: 'Hashnode',
                path: 'https://doctordalvarez.hashnode.dev/',
              },
            ]}
          />
        </div>
      </div> */}

      {/* <div className="copyright"> */}
      <div className="container">
        <PText>2021 | Designed By Diego Alvarez with ⚛</PText>
      </div>
      {/* </div> */}
    </FooterStyles>
  );
}
