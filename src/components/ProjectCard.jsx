import React from 'react'
import { MdLanguage } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const ProjectCard = ({filteredItems, siteNewTap}) => {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div className='gridFilter'>
            {
                filteredItems.map(item => (
                    <div
                        key={item.id}
                        className={`w-fit ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}
                    >
                        <img
                            className="max-w-[250px] self-center rounded-[20px]"
                            src={item.img}
                            alt=''
                        />
                        <h3>{item.title}</h3>
                        <p>{item.type}</p>

                        <div className='flex justify-center mt-[5px] text-[20px] gap-4 text-textNeutralGray'>
                            {
                                item.site ?
                                    <MdLanguage className='cursor-point
                                        transition
                                        ease-in-out
                                        delay-150
                                        hover:-translate-y-1
                                        hover:scale-110
                                        hover:text-primary
                                        duration-300'
                                        onClick={() => siteNewTap(item.site)}
                                    />
                                : null
                            }
                            <FaGithub className='cursor-point
                                transition
                                ease-in-out
                                delay-150
                                hover:-translate-y-1
                                hover:scale-110
                                hover:text-primary
                                duration-300'
                                onClick={() => siteNewTap(item.github)}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard