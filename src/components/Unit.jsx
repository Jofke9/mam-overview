import React, { useContext } from 'react';
import isEqual from 'lodash/isEqual';
import GlobalContext from './../GlobalContext';
import AddButton from './AddButton';


export default function Unit({ name, img, cost, researchCost, upgradeCosts }) {

    let emptyComp = JSON.parse('{}');
    const { isCalculating, setIsCalculating, totalCost, setTotalCost } = useContext(GlobalContext);

    function checkNeedsCheck(_cost, _upgradeCosts, _researchCost) {
        let comparison = JSON.parse('{ "gold": 0, "food": 0, "metal": 0, "mana": 0, "oil": 0, "crystal": 0, "subdolak": 0 }');
        if (isEqual(_cost, comparison) || isEqual(_researchCost, comparison)) {
            console.log(_cost + " or " + _researchCost + " is the same as " + comparison);
            return true;
        }
        for (let i = 0; i < _upgradeCosts.length; i++) {

            if (isEqual(_upgradeCosts[i].price, comparison)) {
                console.log(_upgradeCosts[i].price + " is the same as " + comparison);
                return true;
            }
        }
        return false;
    }

    return (
        <div className="flex flex-col items-center py-4 px-6 bg-white rounded-lg shadow-lg">
            <p className={`text-lg font-medium mb-4 ${checkNeedsCheck(cost, upgradeCosts, researchCost) ? 'text-red-500' : ''}`}>
                {name}
            </p>
            <img
                src={img}
                alt={name}
                className="w-16 h-auto mb-4 rounded-md shadow-md"
            />
            {!isEqual(researchCost, emptyComp) && (
                <div className="items-center justify-center mb-4">
                    <p className="flex text-gray-700 font-medium mr-2">Research:
                        {isCalculating && <AddButton cost={researchCost} />}</p>
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
            )}
            <div className="items-center justify-center mb-4">
                <p className="flex text-gray-700 font-medium mr-2">Build:
                    {isCalculating && <AddButton cost={cost} />}</p>
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
                    <p className="flex text-gray-700 font-medium mr-2">
                        {upgradeCost.name + ":"}
                        {isCalculating && (<AddButton cost={upgradeCost.price} />)}
                    </p>
                    <div className='flex'>
                        {Object.entries(upgradeCost.price).map(([resource, amount]) => {
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
