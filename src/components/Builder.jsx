import React, { useState } from 'react';
import BuilderUnits from './BuilderUnits.jsx';
import Unit from './Unit.jsx'

export default function Builder() {
    const [selectedBuilder, setSelectedBuilder] = useState(null); // state for the selected builder

    const builders = [
        {
            id: 1,
            name: "Mixed builder",
            img: "../images/builders/mixed.png"
        },
        {
            id: 2,
            name: "Ranged builder",
            img: "../images/builders/ranged.png"
        },
        {
            id: 3,
            name: "Magical builder",
            img: "../images/builders/magical.png"
        },
        {
            id: 4,
            name: "Melee builder",
            img: "../images/builders/melee.png"
        },
    ];

    const baseUnits = [
        {
            type: "Melee",
            units: [
                {
                    name: "Beholder",
                    img: "../images/units/BaseUnits/beholder.png",
                    cost: { gold: 44, food: 9, metal: 0, mana: 5, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 12, food: 6, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Rexxar",
                    img: "../images/units/BaseUnits/rexxar.png",
                    cost: { gold: 57, food: 16, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 118, food: 30, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 24, food: 14, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Angel",
                    img: "../images/units/BaseUnits/angel.png",
                    cost: { gold: 100, food: 18, metal: 0, mana: 20, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 25, food: 12, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Anubis",
                    img: "../images/units/BaseUnits/anubis.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
            ],
        },
        {
            type: "Ranged",
            units: [
                {
                    name: "Marine",
                    img: "../images/units/BaseUnits/marine.png",
                    cost: { gold: 27, food: 0, metal: 6, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 48, food: 0, metal: 12, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 16, food: 0, metal: 5, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Stalker",
                    img: "../images/units/BaseUnits/stalker.png",
                    cost: { gold: 80, food: 0, metal: 25, mana: 10, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 22, food: 0, metal: 12, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Ghost",
                    img: "../images/units/BaseUnits/ghost.png",
                    cost: { gold: 70, food: 0, metal: 30, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 63, food: 0, metal: 20, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 30, food: 0, metal: 15, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Sun Idol",
                    img: "../images/units/BaseUnits/sun-idol.png",
                    cost: { gold: 110, food: 0, metal: 25, mana: 30, oil: 0, crystal: 5, subdolak: 5 },
                    upgradeCosts: [
                        { gold: 110, food: 0, metal: 15, mana: 30, oil: 0, crystal: 10, subdolak: 10 }
                    ],
                    researchCost: { gold: 60, food: 0, metal: 25, mana: 0, oil: 0, crystal: 0, subdolak: 5 },
                    needsCheck: false
                },
            ],
        },
        {
            type: "Magical",
            units: [
                {
                    name: "High Templar",
                    img: "../images/units/BaseUnits/high-templar.png",
                    cost: { gold: 47, food: 0, metal: 0, mana: 47, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 67, food: 0, metal: 0, mana: 67, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 27, food: 0, metal: 0, mana: 18, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Snow Queen",
                    img: "../images/units/BaseUnits/snow-queen.png",
                    cost: { gold: 50, food: 0, metal: 0, mana: 65, oil: 0, crystal: 5, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 33, food: 0, metal: 0, mana: 27, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Arc",
                    img: "../images/units/BaseUnits/arc.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Conjurer",
                    img: "../images/units/BaseUnits/conjurer.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 50, food: 0, metal: 0, mana: 40, oil: 0, crystal: 0, subdolak: 10 },
                    needsCheck: true
                },
            ],
        },
        {
            type: "Mechanical",
            units: [
                {
                    name: "Berserker",
                    img: "../images/units/BaseUnits/berserker.png",
                    cost: { gold: 65, food: 0, metal: 6, mana: 0, oil: 6, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 24, food: 0, metal: 6, mana: 0, oil: 8, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Butterfly",
                    img: "../images/units/BaseUnits/butterfly.png",
                    cost: { gold: 55, food: 0, metal: 3, mana: 24, oil: 5, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 28, food: 0, metal: 8, mana: 0, oil: 12, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Battle tank",
                    img: "../images/units/BaseUnits/battletank.png",
                    cost: { gold: 70, food: 0, metal: 10, mana: 0, oil: 12, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 82, food: 0, metal: 15, mana: 0, oil: 15, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: true
                },
                {
                    name: "Robotron",
                    img: "../images/units/BaseUnits/robotron.png",
                    cost: { gold: 148, food: 0, metal: 20, mana: 0, oil: 20, crystal: 5, subdolak: 5 },
                    upgradeCosts: [
                        { gold: 176, food: 0, metal: 20, mana: 0, oil: 20, crystal: 5, subdolak: 5 }
                    ],
                    researchCost: { gold: 60, food: 0, metal: 16, mana: 0, oil: 20, crystal: 0, subdolak: 5 },
                    needsCheck: false
                },
            ],
        },
    ];

    const handleBuilderChange = (event) => {
        setSelectedBuilder(builders.find((builder) => builder.id === parseInt(event.target.value)));
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mt-4">
                <label htmlFor="builder" className="text-lg font-medium block mb-2">Choose a builder:</label>
                <select
                    id="builder"
                    className="block appearance-none w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                    value={selectedBuilder?.id || ''}
                    onChange={handleBuilderChange}
                >
                    <option value="">Select a builder...</option>
                    {builders.map((builder) => (
                        <option key={builder.id} value={builder.id}>
                            {builder.name}
                        </option>
                    ))}
                </select>
                {/* Builder with its units */}
                {selectedBuilder && (
                    <div className="mt-4 flex flex-col items-center">
                        <p className="text-sm font-medium mt-2">{selectedBuilder.name}</p>
                        <img
                            src={selectedBuilder.img}
                            alt={selectedBuilder.name}
                            className="w-20 rounded-md shadow-md mb-2"
                        />
                        <BuilderUnits builderId={selectedBuilder.id} />
                    </div>
                )}

                {/* All base units */}
                <div className="mt-4">
                    <h2 className="text-lg font-medium mb-2">Units:</h2>
                    <div className="grid grid-cols-4">
                        {baseUnits.map((unitGroup) => (
                            <div key={unitGroup.type}>
                                <h3 className="text-md font-medium">{unitGroup.type}</h3>
                                <div className="w-70 h-auto">
                                    {unitGroup.units.map((unit) => (
                                        <div key={unit.name} className="bg-white rounded-md shadow-md p-2">
                                            <Unit name={unit.name} img={unit.img} cost={unit.cost} researchCost={unit.researchCost} upgradeCosts={unit.upgradeCosts} needsCheck={unit.needsCheck} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}