import { useSelector } from "react-redux"
import { experiences } from "../../data/ExperienceData"
import Title from "../../components/utils/Title"

const Experience = () => {
    const { isDarkMode } = useSelector(state => state.darkMode)

    const textClass = isDarkMode ? 'text-textWhaite' : 'text-textBlack'
    const subTextClass = 'text-gray-400'

    return (
        <div id="experience" className="flex flex-col text-center container mx-auto py-[80px]">
            <Title title="Experience" />

            <div className="flex justify-center flex-col gap-8 ">
                {experiences.map(exp => (
                    <div key={exp.id} className={`flex flex-col gap-2 p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-white'}`}>
                        <h3 className={`text-[15px] font-bold ${textClass}`}>{exp.role}</h3>
                        <span className={`text-[12px] font-semibold ${subTextClass}`}>{exp.company} | {exp.period}</span>
                        <p className={`text-sm leading-6 ${textClass}`}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience