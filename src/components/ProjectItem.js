import React from 'react';
import styled from 'styled-components';
import { DiGithub } from 'react-icons/di';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__img:hover {
    border: 1px solid rgb(97, 218, 251, 0.6);
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    /* background-color: rgb(97, 218, 251, 0.6); */
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  gitlink = ``,
  link = '',
}) {
  return (
    <ProjectItemStyles>
      <a href={link}>
        <div className="projectItem__img">
          <img src={img} alt="project img" />
        </div>
        <div className="projectItem__info">
          <div>
            <h3 className="projectItem__title">{title}</h3>
          </div>
        </div>
      </a>
      <a href={gitlink}>
        <p className="projectItem__desc">
          <DiGithub style={{ width: '50px' }} />
        </p>
      </a>
    </ProjectItemStyles>
  );
}
