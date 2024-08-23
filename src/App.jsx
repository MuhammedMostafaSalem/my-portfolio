import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/utils/Footer"
import Contact from "./sections/contact/Contact"
import Hero from "./sections/hero/Hero"
import Projects from "./sections/projects/Projects"
import Skills from "./sections/skills/Skills"
import { toggleDarkMode } from "./store/reducer/darkModeReducer"

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  }

  return (
    <div className={`${isDarkMode ? "bg-bgblack" : "bg-bgWhaite"}`}>
      <Hero isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode} />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
