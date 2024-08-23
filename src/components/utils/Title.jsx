import React from 'react'
import { useSelector } from 'react-redux';

const Title = ({title}) => {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div className={`${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title