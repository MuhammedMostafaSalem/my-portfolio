import React from 'react'

const Tabs = ({tabs, activeTab, onClickTab}) => {
    return (
        <div className="w-full p-4">
            <div className="flex gap-2 justify-center mb-6">
                {
                    tabs.map(tab => (
                        <div
                            key={tab.filter}
                            className={`px-2 py-1 text-[14px] sm-min:px-4 sm-min:py-2 sm-min:text-[18px] rounded cursor-point ${
                                activeTab === tab.filter
                                    ? 'bg-primary text-textWhaite'
                                : 'bg-bgSoftGray text-textNeutralGray'
                            }`}
                            onClick={() => onClickTab(tab.filter)}
                        >
                            {tab.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs