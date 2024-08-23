import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/utils/Footer"
import Contact from "./sections/contact/Contact"
import Hero from "./sections/hero/Hero"
import Projects from "./sections/projects/Projects"
import Skills from "./sections/skills/Skills"
import { toggleDarkMode } from "./store/reducer/darkModeReducer"
import { useTranslation } from "react-i18next"
import { changeLanguage, setDirection } from "./store/reducer/languageReducer"

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.darkMode);

  const { language, dir } = useSelector(state => state.lang);
  const [langs, setLangs] = useState(language);
  const [dirs, setDirs] = useState(dir);

  const { i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(changeLanguage(lang))
    setLangs(lang)

    const newDir = lang === 'ar' ? 'rtl' : 'ltr';
    dispatch(setDirection(newDir));
    setDirs(newDir);
  }
  document.dir = dirs;

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  }

  return (
    <div className={`${isDarkMode ? "bg-bgblack" : "bg-bgWhaite"}`}>
      <Hero
        isDarkMode={isDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
        langs={langs}
        handleChangeLang={handleChangeLang}
      />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
