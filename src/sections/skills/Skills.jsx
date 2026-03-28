import Title from '../../components/utils/Title'
import SkillList from '../../components/utils/SkillList'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useSelector(state => state.darkMode);

    return (
        <div id="skills" className='flex flex-col text-center gap-[30px] py-[80px]'>
            <Title title={t("Skills")} />

            {/* Frontend */}
            <div className='flex flex-col gap-[5px]'>
                <span className={`text-[18px] font-semibold ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>Frontend</span>
                <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                    <SkillList skill="HTML" isDarkMode={isDarkMode} />
                    <SkillList skill="CSS" isDarkMode={isDarkMode} />
                    <SkillList skill="JavaScript" isDarkMode={isDarkMode} />
                    <SkillList skill="React.js" isDarkMode={isDarkMode} />
                    <SkillList skill="Redux" isDarkMode={isDarkMode} />
                    <SkillList skill="Redux Toolkit" isDarkMode={isDarkMode} />
                    <SkillList skill="Tailwind CSS" isDarkMode={isDarkMode} />
                    <SkillList skill="Bootstrap" isDarkMode={isDarkMode} />
                </div>
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            {/* Backend */}
            <div className='flex flex-col gap-[5px]'>
                <span className={`text-[18px] font-semibold ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>Backend</span>
                <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                    <SkillList skill="Node.js" isDarkMode={isDarkMode} />
                    <SkillList skill="Express.js" isDarkMode={isDarkMode} />
                    <SkillList skill="MongoDB" isDarkMode={isDarkMode} />
                    <SkillList skill="Mongoose" isDarkMode={isDarkMode} />
                    <SkillList skill="REST APIs" isDarkMode={isDarkMode} />
                    <SkillList skill="JWT Authentication" isDarkMode={isDarkMode} />
                </div>
            </div>

            <hr className={`my-1 border-1 ${isDarkMode ? 'border-bgWhaite' : 'border-bgblack'} w-[100px] sm1-min:w-[300px] mx-auto`} />

            {/* Tools */}
            <div className='flex flex-col gap-[5px]'>
                <span className={`text-[18px] font-semibold ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>Tools</span>
                <div className='flex justify-center self-center flex-wrap gap-x-[40px] max-w-[26ch] sm1-min:max-w-fit sm1-min:gap-[30px]'>
                    <SkillList skill="Git" isDarkMode={isDarkMode} />
                    <SkillList skill="GitHub" isDarkMode={isDarkMode} />
                    <SkillList skill="Postman" isDarkMode={isDarkMode} />
                    <SkillList skill="Vite" isDarkMode={isDarkMode} />
                    <SkillList skill="MongoDB Compass" isDarkMode={isDarkMode} />
                    <SkillList skill="Figma" isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    )
}

export default Skills