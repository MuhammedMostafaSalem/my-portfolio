import React from 'react'

const Tabs = ({tabs, activeTab, onClickTab}) => {
    return (
        <div className="w-full p-4">
            <div className="flex space-x-4 justify-center mb-6">
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
            

            {/* <div className="gridFilter">
                {
                    filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="p-4 bg-white shadow rounded hover:shadow-lg transition"
                        >
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Tabs