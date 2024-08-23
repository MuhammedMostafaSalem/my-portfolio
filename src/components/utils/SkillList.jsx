import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const SkillList = ({ skill, degree, isDarkMode }) => {

    return (
        <div className={`flex gap-2 items-center ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
            <GiCheckMark />
            <p>{skill}</p>
            <p>{degree}</p>
        </div>
    )
}

export default SkillList