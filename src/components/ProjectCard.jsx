import { MdLanguage } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const ProjectCard = ({ filteredItems, siteNewTap }) => {
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div className='gridFilter'>
            {
                filteredItems.map(item => (
                    <div
                        key={item.id}
                        className={`relative w-fit ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'} flex flex-col gap-2`}
                    >
                        <span className={`absolute top-0 left-0 text-[8px] px-2 py-1 rounded w-fit text-white
                            ${item.status === "Completed" ? "bg-green-600" : "bg-yellow-500"}`}>
                            {item.status}
                        </span>
                        {/* Image */}
                        <img
                            className="max-w-[250px] self-center rounded-[20px]"
                            src={item.img}
                            alt=''
                        />
                        {/* Content */}
                        <h3>{item.title}</h3>
                        <p className="max-w-[30ch] mx-auto text-[13px] text-gray-400">
                            {item.description}
                        </p>
                        <p>{item.type}</p>

                        {/* Tech Stack */}
                        <div className="flex justify-center flex-wrap gap-[10px] max-w-[30ch]">
                            {
                                item.tech?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>

                        {/* Links */}
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