import avatar from '../../assets/images/me.jpg'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import CV from '../../assets/file/Mohammed-Mostafa-Salem-Resume-01.pdf';

const Hero = ({ isDarkMode, handleToggleDarkMode, langs, handleChangeLang, siteNewTap }) => {
    const { t } = useTranslation();

    const handleDownloadResume = () => {
        const url = CV;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MoSalemResume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const handleViewSection = (id) => document.getElementById(id).scrollIntoView({ behavior: "smooth" })

    return (
        <div id="hero" className='flex flex-col sm1-min:flex-row-reverse sm1-min:items-center sm1-min:justify-evenly justify-center gap-[20px] text-center h-[100dvh] min-h-[500px]'>
            <div className='flex justify-center'>
                <img
                    src={avatar}
                    className='w-[250px] h-[250px] sm1-min:w-[350px] sm1-min:h-[350px] rounded-full'
                    alt="Profile picture"
                />
                <div>
                    <div onClick={handleToggleDarkMode} className={`${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
                        {
                            isDarkMode ?
                                <MdWbSunny className='text-[20px] cursor-point' />
                                : <FaMoon className='text-[20px] cursor-point' />
                        }
                    </div>
                </div>
            </div>

            <div className={`flex flex-col gap-[20px] ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
                <h1>
                    {t('fristName')}
                    <br />
                    {t('lastName')}
                </h1>

                <h2 className="text-lg sm:text-xl font-semibold">
                    Full Stack Web Developer (MERN Stack)
                </h2>

                <p className="max-w-[40ch] mx-auto">
                    I build modern, responsive and full stack web applications
                    using MongoDB, Express.js, React.js, Next.js and Node.js.
                </p>

                <span className='flex justify-center gap-[10px]'>
                    <FaGithub
                        className='text-[25px] cursor-point'
                        onClick={() => siteNewTap("https://github.com/MuhammedMostafaSalem")}
                    />
                    <FaLinkedin
                        className='text-[25px] cursor-point'
                        onClick={() => siteNewTap("https://www.linkedin.com/in/mohamed-mostafa-aa9184218/")}
                    />
                </span>
                <div className="flex justify-center gap-3 flex-wrap">
                    <button
                        className='shadow-custom
                        text-textWhaite
                        border-none
                        rounded-[20px]
                        w-[120px]
                        h-[45px]
                        tetx-[20px]
                        focus:outline-none
                        cursor-point
                        bg-primary'
                        onClick={() => handleViewSection("projects")}
                    >
                        View Projects
                    </button>

                    <button
                        className='shadow-custom
                        text-textWhaite
                        border-none
                        rounded-[20px]
                        w-[120px]
                        h-[45px]
                        tetx-[20px]
                        focus:outline-none
                        cursor-point
                        bg-primary'
                        onClick={() => handleViewSection("contact")}
                    >
                        Contact Me
                    </button>

                    <button
                        className='shadow-custom
                        text-textWhaite
                        border-none
                        rounded-[20px]
                        w-[120px]
                        h-[45px]
                        tetx-[20px]
                        focus:outline-none
                        cursor-point
                        bg-primary'
                        onClick={handleDownloadResume}
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero