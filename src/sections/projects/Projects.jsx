import React, { useState } from 'react'
import Tabs from '../../components/Tabs'
import Title from '../../components/Title';
import ProjectCard from '../../components/ProjectCard'
import { items, tabs } from '../../data/ProjectsData';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');

    const onClickTab = (e) => setActiveTab(e)

    const filteredItems = activeTab === 'all' ? 
        items
    : items.filter(item => item.category === activeTab)

    return (
        <div id="projects" className='flex flex-col text-center py-[30px] h-[50dvh] min-h-[500px]'>
            <Title title="Projects" />

            <Tabs tabs={tabs} activeTab={activeTab} onClickTab={onClickTab} />

            <ProjectCard filteredItems={filteredItems} />
        </div>
    )
}

export default Projects