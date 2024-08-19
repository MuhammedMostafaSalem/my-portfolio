import React from 'react'
import { MdLanguage } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({filteredItems}) => {
    return (
        <div className='gridFilter'>
            {
                filteredItems.map(item => (
                    <div key={item.id} className='w-fit text-textBlack'>
                        <img
                            className="max-w-[250px] self-center rounded-[20px]"
                            src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
                            alt=''
                        />
                        <h3>Name Project</h3>
                        <p>Type Project</p>

                        <div className='flex justify-center mt-[5px] text-[20px] gap-4 text-textNeutralGray'>
                            <MdLanguage className='cursor-pointer
                                transition
                                ease-in-out
                                delay-150
                                hover:-translate-y-1
                                hover:scale-110
                                hover:text-primary
                                duration-300'
                            />
                            <FaGithub className='cursor-pointer
                                transition
                                ease-in-out
                                delay-150
                                hover:-translate-y-1
                                hover:scale-110
                                hover:text-primary
                                duration-300'
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard