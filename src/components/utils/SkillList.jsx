import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const SkillList = ({ skill, degree }) => {
    return (
        <div className='flex gap-2 items-center'>
            <GiCheckMark />
            <p>{skill}</p>
            <p>{degree}</p>
        </div>
    )
}

export default SkillList