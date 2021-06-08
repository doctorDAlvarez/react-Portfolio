import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/hunter.jpeg';
import reactImg from '../images/reactor.jpeg';
import reactImg2 from '../images/reactor2.jpeg';
import CoinTrackerImg from '../images/fullstack.jpeg';
import CavinImg from '../images/directory.jpeg';
import interactive from '../images/interactive.jpeg';
import libraryapp from '../images/library.jpeg';
import publicapi from '../images/publicapi.jpeg';
import rsvp from '../images/rsvp.jpeg';
import harvard from '../images/harvard.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'React Gallery app',
    desc: 'https://github.com/doctorDAlvarez/gallery-app',
    img: reactImg,
    link: 'https://reactphotosearchapp.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'React Giphy App',
    desc: 'https://github.com/doctorDAlvarez/GIF-Searching-APP',
    img: reactImg2,
    link: 'https://giphysearchreact.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Full Stack Campus App',
    desc: 'https://github.com/doctorDAlvarez/schoolApp',
    img: CoinTrackerImg,
    link: 'https://github.com/doctorDAlvarez/schoolApp',
  },
  {
    id: uuidv4(),
    name: 'React Directory Project',
    desc: 'https://serene-mclean-47be12.netlify.app/',
    img: CavinImg,
    link: 'https://serene-mclean-47be12.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Phrase Hunter Game',
    desc: 'https://github.com/doctorDAlvarez/phraseHunter-Game',
    img: ProjectImg,
    link: 'https://doctordalvarez.github.io/phraseHunter-Game/',
  },
  {
    id: uuidv4(),
    name: 'Express Library App',
    desc: 'https://github.com/doctorDAlvarez/Library-App',
    img: libraryapp,
    link: 'https://librarycool.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Interactive form',
    desc: 'https://github.com/doctorDAlvarez/the_InteractiveForm',
    img: interactive,
    link: 'https://doctordalvarez.github.io/the_InteractiveForm/',
  },
  {
    id: uuidv4(),
    name: 'Cloud directory',
    desc: 'https://github.com/doctorDAlvarez/publicAPI-Requests',
    img: publicapi,
    link: 'https://doctordalvarez.github.io/publicAPI-Requests/',
  },
  {
    id: uuidv4(),
    name: 'RSVP app',
    desc: 'https://github.com/doctorDAlvarez/rsvp_App',
    img: rsvp,
    link: 'https://doctordalvarez.github.io/rsvp_App/',
  },
  {
    id: uuidv4(),
    name: 'Harvard CS50 Problem Sets Code',
    desc: 'https://github.com/doctorDAlvarez/CS50_Projects',
    img: harvard,
    link: 'https://github.com/doctorDAlvarez/CS50_Projects',
  },
];

export default projects;
