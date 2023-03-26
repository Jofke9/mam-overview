import React from 'react';

export default function Unit({ name, img, cost, researchCost, upgradeCosts, needsCheck }) {
    return (
        <div className="flex flex-col items-center py-4 px-6 bg-white rounded-lg shadow-lg">
            <p className={`text-lg font-medium mb-4 ${needsCheck ? 'text-red-500' : ''}`}>
                {name}
            </p>
            <img
                src={img}
                alt={name}
                className="w-16 h-auto mb-4 rounded-md shadow-md"
            />
            <div className="items-center justify-center mb-4">
                <p className="text-gray-700 font-medium mr-2">Research:</p>
                <div className='flex'>
                    {Object.entries(researchCost).map(([resource, amount]) => {
                        if (amount !== 0) {
                            return (
                                <div key={resource} className="mr-2 flex items-center">
                                    <img
                                        src={`../images/resources/${resource}.png`}
                                        alt={`${resource}`}
                                        className="w-5 h-auto mr-1"
                                    />
                                    <span className="text-sm font-medium mr-4">{amount}</span>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className="items-center justify-center mb-4">
                <p className="text-gray-700 font-medium mr-2">Build:</p>
                <div className='flex'>
                    {Object.entries(cost).map(([resource, amount]) => {
                        if (amount !== 0) {
                            return (
                                <div key={resource} className="mr-2 flex items-center">
                                    <img
                                        src={`../images/resources/${resource}.png`}
                                        alt={`${resource}`}
                                        className="w-5 h-auto mr-1"
                                    />
                                    <span className="text-sm font-medium mr-4">{amount}</span>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            {upgradeCosts.map((upgradeCost, index) => (
                <div key={index} className="items-center justify-center mb-4">
                    <p className="text-gray-700 font-medium mr-2">
                        {index === 0 ? 'Upgrade:' : `Upgrade ${index + 1}:`}
                    </p>
                    <div className='flex'>
                        {Object.entries(upgradeCost).map(([resource, amount]) => {
                            if (amount !== 0) {
                                return (
                                    <div key={resource} className="mr-2 flex items-center">
                                        <img
                                            src={`../images/resources/${resource}.png`}
                                            alt={`${resource}`}
                                            className="w-5 h-auto mr-1"
                                        />
                                        <span className="text-sm font-medium mr-4">{amount}</span>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
