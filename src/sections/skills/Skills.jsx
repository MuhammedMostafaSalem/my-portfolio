import React from 'react'
import Title from '../../components/utils/Title'
import SkillList from '../../components/utils/SkillList'
import { useSelector } from 'react-redux';

const Skills = () => {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title="Skills" />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="HTML" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="CSS" degree="95%" isDarkMode={isDarkMode} />
                <SkillList skill="JavaScript" degree="70%" isDarkMode={isDarkMode} />
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="react.js" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="redux" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="redux-toolkit" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="node.js" degree="30%" isDarkMode={isDarkMode} />
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="bootstrap" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="react-bootstrap" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="tailwindcss" degree="100%" isDarkMode={isDarkMode} />
                <SkillList skill="material-tailwind" degree="100%" isDarkMode={isDarkMode} />
            </div>
        </div>
    )
}

export default Skills