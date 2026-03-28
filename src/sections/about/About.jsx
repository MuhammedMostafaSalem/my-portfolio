import { useSelector } from "react-redux"

const About = () => {
    const { isDarkMode } = useSelector(state => state.darkMode);
    
    return (
        <div id="about" className="flex flex-col text-center py-[80px]">
            <h2 className={`text-[28px] font-bold mb-6 ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
                About Me
            </h2>

            <p className={`max-w-[600px] mx-auto leading-7 ${isDarkMode ? 'text-textWhaite' : 'text-textBlack'}`}>
                I am a Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
                I enjoy building full web applications from frontend to backend, including authentication systems,
                REST APIs, and responsive user interfaces.
                <br /><br />
                I have built multiple projects such as chat applications, e-commerce websites,
                dashboards, and blog platforms.
                <br /><br />
                Currently, I am looking for an opportunity as a Full Stack Developer where I can grow and improve my skills.
            </p>
        </div>
    )
}

export default About