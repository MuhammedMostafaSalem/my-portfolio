import React from 'react'
import avatar from '../../assets/images/me.jpeg'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import TypingTextAnimation from '../../components/TypingTextAnimation';
import { useTranslation } from 'react-i18next';
import CV from '../../assets/file/Mohammed Mostafa CV.pdf';

const Hero = ({isDarkMode, handleToggleDarkMode, langs, handleChangeLang}) => {
    const { t } = useTranslation();

    const handleDownloadResume = () => {
        const url = CV;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MoSalem.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

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
                    {
                        langs === "en" ?
                            <div
                                className={`cursor-point ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}
                                onClick={() => handleChangeLang('ar')}
                            >
                                <div className="h-4 w-4">ar</div>
                            </div>
                        :
                        <div
                            className={`cursor-point ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}
                            onClick={() => handleChangeLang('en')}
                        >
                            <div className="h-4 w-4">en</div>
                        </div>
                    }
                </div>
            </div>

            <div className={`flex flex-col gap-[20px] ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
                <h1>
                {t('fristName')}
                <br />
                {t('lastName')}
                </h1>

                <TypingTextAnimation t={t} />

                <span className='flex justify-center gap-[10px]'>
                    <a href="https://twitter.com/" target="_blank">
                        <FaSquareXTwitter className='text-[25px]' />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <FaGithub className='text-[25px]' />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <FaLinkedin className='text-[25px]' />
                    </a>
                </span>

                <div className='flex justify-center'>
                    <p className='max-w-[40ch]'>{t("Introducing myself")}</p>
                </div>

                <div>

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
                    {t("Resume")}
                </button>
                </div>
            </div>
        </div>
    )
}

export default Hero