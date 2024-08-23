import { useTranslation } from "react-i18next";


export const useTabs = () => {
    const { t } = useTranslation();

    const tabs = [
        { name: t("All"), filter: 'all' },
        { name: 'Frontend', filter: 'frontend' },
        { name: 'Backend', filter: 'backend' },
        { name: 'Fullstack', filter: 'fullstack' },
    ]

    return tabs;
}

export const items = [
    { id: 1, category: 'frontend', title: 'React Project' },
    { id: 2, category: 'backend', title: 'Node.js Project' },
    { id: 3, category: 'fullstack', title: 'MERN Project' },
    { id: 4, category: 'frontend', title: 'Vue.js Project' },
]