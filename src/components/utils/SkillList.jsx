import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const SkillList = ({ skill, isDarkMode }) => {

    return (
        <div className={`flex gap-2 items-center ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
            <GiCheckMark />
            <p>{skill}</p>
        </div>
    )
}

export default SkillList