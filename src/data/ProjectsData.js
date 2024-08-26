import { useTranslation } from "react-i18next";
import Quran from '../assets/images/projects/Quran.png';
import MoviNow from '../assets/images/projects/MoviNow.png';
import ECOMMERCE from '../assets/images/projects/ECOMMERCE.png';
import HappyShop from '../assets/images/projects/HappyShop.png';
import eFurniture from '../assets/images/projects/eFurniture.png';
import visionThings from '../assets/images/projects/vision-things.png';
import ADADK from '../assets/images/projects/ADADK.png';
import COVID19 from '../assets/images/projects/COVID-19.png';


export const useTabs = () => {
    const { t } = useTranslation();

    const tabs = [
        { name: t("All"), filter: 'all' },
        { name: 'js', filter: 'js' },
        { name: 'react', filter: 'react' },
        { name: 'redux', filter: 'redux' },
        { name: 'redux-toolkit', filter: 'redux-toolkit' },
        { name: 'tailwindcss', filter: 'tailwindcss' },
        { name: 'bootstrap', filter: 'bootstrap' },
        { name: 'real-project', filter: 'real-project' },
    ]

    return tabs;
}

export const items = [
    {
        id: 1,
        category: ['react', 'redux-toolkit', 'tailwindcss'],
        title: 'Quran',
        type: 'quran player',
        img: Quran,
        site: "https://quranlslam.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/Quran.git"
    },
    {
        id: 2,
        category: ['react', 'redux-toolkit', 'tailwindcss'],
        title: 'MoviNow',
        type: 'movie list',
        img: MoviNow,
        site: "https://movinow.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/MoviNow.git"
    },
    {
        id: 3,
        category: ['react', 'redux', 'bootstrap'],
        title: 'ECOMMERCE',
        type: 'ecommerce',
        img: ECOMMERCE,
        site: "https://ec-ommerce.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/ECOMMRERCE.git"
    },
    {
        id: 4,
        category: ['react', 'redux', 'bootstrap'],
        title: 'HappyShop',
        type: 'clothing store',
        img: HappyShop,
        site: "",
        github: "https://github.com/MuhammedMostafaSalem/HappyShop2.git"
    },
    {
        id: 5,
        category: ['react', 'redux-toolkit'],
        title: 'eFurniture',
        type: 'home furniture store',
        img: eFurniture,
        site: "https://efurniture.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/eFurniture.git"
    },
    {
        id: 6,
        category: ['js', 'bootstrap', 'real-project'],
        title: 'vision-things',
        type: 'technology',
        img: visionThings,
        site: "https://vision-things.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/Rouya.git"
    },
    {
        id: 7,
        category: ['js', 'bootstrap', 'real-project'],
        title: 'ADADK',
        type: 'smart home',
        img: ADADK,
        site: "https://adadk-technology.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/ADADK-technology.git"
    },
    {
        id: 8,
        category: ['js'],
        title: 'COVID-19',
        type: 'covid-19 information',
        img: COVID19,
        site: "https://site-covid-19.netlify.app",
        github: "https://github.com/MuhammedMostafaSalem/COVID-19.git"
    },
]