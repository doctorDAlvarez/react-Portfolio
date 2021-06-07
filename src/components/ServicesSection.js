import React from 'react';
import { MdCode, MdDeveloperBoard } from 'react-icons/md';
import styled from 'styled-components';
import {
  DiGit,
  DiJavascript,
  DiLinux,
  DiMongodb,
  DiResponsive,
  DiScrum,
} from 'react-icons/di';
import { FaAws, FaNodeJs, FaPython } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 2rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    color: white;
    justify-content: space-between;
    text-align: justify;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Skills" />

        <div className="services__allItems">
          <ServicesSectionItem />
          <ServicesSectionItem
            icon={<DiResponsive />}
            title="Responsive Design"
            description="Styled Components. CSS3. Mobile-first Approach."
          />
          <ServicesSectionItem
            icon={<DiScrum />}
            title="SCRUM"
            description="Experience in Agile methodologies. Sprints. User stories. Workload estimations."
          />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaNodeJs />}
            title="Node.js"
            description="Npm. Express framework. Testing libraries."
          />
          <ServicesSectionItem
            icon={<FaPython />}
            title="Python"
            description="Flask. Selenium. Scrapping. Pandas. Numpy. Matplotlib. Scikit-learn. Jupiter notebooks."
          />
          <ServicesSectionItem
            icon={<DiLinux />}
            title="Linux"
            description="Bash Scripting. Network stack experience. Security and pentesting certificates. Burp. Maltego. Nmap."
          />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaAws />}
            title="AWS"
            description="AWS cloud practicioner"
          />
          <ServicesSectionItem
            icon={<DiGit />}
            title="Git"
            description="Pull requests. Merging. Branching. Github."
          />
          <ServicesSectionItem
            icon={<DiMongodb />}
            title="MongoDB"
            description="MongoDB certificate"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
