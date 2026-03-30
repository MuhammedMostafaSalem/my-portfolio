import { useTranslation } from "react-i18next";
import Quran from '../assets/images/projects/Quran.png';
import MoviNow from '../assets/images/projects/MoviNow.png';
import ECOMMERCE from '../assets/images/projects/ECOMMERCE.png';
import eFurniture from '../assets/images/projects/eFurniture.png';
import visionThings from '../assets/images/projects/vision-things.png';
import ADADK from '../assets/images/projects/ADADK.png';
import COVID19 from '../assets/images/projects/COVID-19.png';
import Chato from '../assets/images/projects/Chato.png';


export const useTabs = () => {
    const { t } = useTranslation();

    const tabs = [
        { name: t("All"), filter: 'all' },
        { name: 'js', filter: 'js' },
        { name: 'react', filter: 'react' },
        { name: 'next', filter: 'next' },
        { name: 'node', filter: 'node' },
        { name: 'fullstack', filter: 'fullstack' },
        { name: 'real-project', filter: 'real-project' },
    ]

    return tabs;
}

export const items = [
    {
        id: 1,
        category: ['react'],
        title: 'Quran App',
        type: 'Frontend',
        img: Quran,
        site: "https://quranlslam.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/Quran.git",
        description: "Web application for listening to Quran with surah selection, audio player and search functionality.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS"],
        status: "Completed"
    },
    {
        id: 2,
        category: ['react'],
        title: 'MoviNow',
        type: 'Frontend',
        img: MoviNow,
        site: "https://movinow.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/MoviNow.git",
        description: "Movie listing web application that displays trending movies, search functionality and movie details.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS", "API"],
        status: "Completed"
    },
    {
        id: 3,
        category: ['react', 'node', 'fullstack'],
        title: 'ECOMMERCE',
        type: 'Fullstack',
        img: ECOMMERCE,
        site: "https://ec-ommerce.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/ECOMMRERCE.git",
        description: "E-commerce web application with product listing, shopping cart, and product details pages.",
        tech: ["React", "Redux", "Bootstrap", "Node.js", "Express", "MongoDB"],
        status: "Completed"
    },
    {
        id: 4,
        category: ['react'],
        title: 'eFurniture',
        type: 'Frontend',
        img: eFurniture,
        site: "https://efurniture.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/eFurniture.git",
        description: "Furniture e-commerce website with product listing, cart system and modern UI.",
        tech: ["React", "Redux Toolkit", "firebase"],
        status: "Completed"
    },
    {
        id: 5,
        category: ['js', 'real-project'],
        title: 'vision-things',
        type: 'Frontend',
        img: visionThings,
        site: "https://vision-things.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/Rouya.git",
        description: "Technology company website specializing in monitoring and security.",
        tech: ["JavaScript", "Bootstrap"],
        status: "Completed"
    },
    {
        id: 6,
        category: ['js', 'real-project'],
        title: 'ADADK',
        type: 'Frontend',
        img: ADADK,
        site: "https://adadk-technology.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/ADADK-technology.git",
        description: "Smart home company website showcasing services and products with responsive design.",
        tech: ["JavaScript", "Bootstrap"],
        status: "Completed"
    },
    {
        id: 7,
        category: ['js'],
        title: 'COVID-19',
        type: 'Frontend',
        img: COVID19,
        site: "https://site-covid-19.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/COVID-19.git",
        description: "Website that displays COVID-19 statistics and information",
        tech: ["JavaScript", "Bootstrap"],
        status: "Completed"
    },
    {
        id: 8,
        category: ['react', 'node', 'fullstack', 'next'],
        title: 'Chato',
        type: 'Fullstack',
        img: Chato,
        site: "",
        github: "https://github.com/MuhammedMostafaSalem/Chato.git",
        description: "Full stack real-time chat application currently in development. The application includes authentication, user profiles, real-time messaging, and project-based chat rooms. Built using the MERN stack and Socket.io.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
        status: "In Progress"
    },
]