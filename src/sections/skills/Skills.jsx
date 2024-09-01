import React from 'react'
import Title from '../../components/utils/Title'
import SkillList from '../../components/utils/SkillList'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title={t("Skills")} />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="HTML" isDarkMode={isDarkMode} />
                <SkillList skill="CSS" isDarkMode={isDarkMode} />
                <SkillList skill="JavaScript" isDarkMode={isDarkMode} />
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="react.js" isDarkMode={isDarkMode} />
                <SkillList skill="redux" isDarkMode={isDarkMode} />
                <SkillList skill="redux-toolkit" isDarkMode={isDarkMode} />
                <SkillList skill="node.js" isDarkMode={isDarkMode} />
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="bootstrap" isDarkMode={isDarkMode} />
                <SkillList skill="react-bootstrap" isDarkMode={isDarkMode} />
                <SkillList skill="tailwindcss" isDarkMode={isDarkMode} />
                <SkillList skill="material-tailwind" isDarkMode={isDarkMode} />
            </div>
        </div>
    )
}

export default Skills