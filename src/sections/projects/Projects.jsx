import { useState } from 'react'
import Tabs from '../../components/Tabs'
import Title from '../../components/utils/Title';
import ProjectCard from '../../components/ProjectCard'
import { items, useTabs } from '../../data/ProjectsData';
import { useTranslation } from 'react-i18next';

const Projects = ({siteNewTap}) => {
    const tabs = useTabs();
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');

    const onClickTab = (e) => setActiveTab(e)

    const filteredItems = activeTab === 'all' ? 
        items
    : items.filter(item => item.category.includes(activeTab))

    return (
        <div id="projects" className='flex flex-col text-center py-[80px]'>
            <Title title={t("Projects")} />
            <p className="text-center max-w-[500px] mx-auto mb-6 text-gray-400">
                Here are some of the projects I have built using modern web technologies.
            </p>

            <Tabs tabs={tabs} activeTab={activeTab} onClickTab={onClickTab} />

            <ProjectCard filteredItems={filteredItems} siteNewTap={siteNewTap} />
        </div>
    )
}

export default Projects