import React from 'react'
import Title from '../../components/utils/Title'
import SkillList from '../../components/utils/SkillList'

const Skills = () => {
    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title="Skills" />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="HTML" degree="100%" />
                <SkillList skill="CSS" degree="95%" />
                <SkillList skill="JavaScript" degree="70%" />
            </div>

            <hr className="my-1 border-1 border-bgblack w-[100px] sm1-min:w-[300px] mx-auto" />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="react.js" degree="100%" />
                <SkillList skill="redux" degree="100%" />
                <SkillList skill="redux-toolkit" degree="100%" />
                <SkillList skill="node.js" degree="30%" />
            </div>

            <hr className="my-1 border-1 border-bgblack w-[100px] sm1-min:w-[300px] mx-auto" />

            <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                <SkillList skill="bootstrap" degree="100%" />
                <SkillList skill="react-bootstrap" degree="100%" />
                <SkillList skill="tailwindcss" degree="100%" />
                <SkillList skill="material-tailwind" degree="100%" />
            </div>
        </div>
    )
}

export default Skills