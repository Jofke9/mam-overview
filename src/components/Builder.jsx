import React, { useState } from 'react';
import Units from './Units.jsx';
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
            type: "melee",
            units: [
                {
                    name: "Beholder",
                    img: "../images/units/BaseUnits/beholder.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Rexxar",
                    img: "../images/units/BaseUnits/rexxar.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Angel",
                    img: "../images/units/BaseUnits/angel.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Anubis",
                    img: "../images/units/BaseUnits/anubis.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
        {
            type: "ranged",
            units: [
                {
                    name: "Marine",
                    img: "../images/units/BaseUnits/marine.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Stalker",
                    img: "../images/units/BaseUnits/stalker.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Ghost",
                    img: "../images/units/BaseUnits/ghost.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Sun Idol",
                    img: "../images/units/BaseUnits/sun-idol.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
        {
            type: "magical",
            units: [
                {
                    name: "High Templar",
                    img: "../images/units/BaseUnits/high-templar.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Snow Queen",
                    img: "../images/units/BaseUnits/snow-queen.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Arc",
                    img: "../images/units/BaseUnits/arc.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Conjurer",
                    img: "../images/units/BaseUnits/conjurer.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0, type: "Regular" },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0, type: "Reza" }
                    ]
                },
            ],
        },
        {
            type: "mechanical",
            units: [
                {
                    name: "Berserker",
                    img: "../images/units/BaseUnits/berserker.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Butterfly",
                    img: "../images/units/BaseUnits/butterfly.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Battle tank",
                    img: "../images/units/BaseUnits/battletank.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Robotron",
                    img: "../images/units/BaseUnits/robotron.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
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
                        <Units builderId={selectedBuilder.id} />
                    </div>
                )}

                {/* All base units */}
                <div className="mt-4">
                    <h2 className="text-lg font-medium mb-2">Units:</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {baseUnits.map((unitGroup) => (
                            <div key={unitGroup.type}>
                                <h3 className="text-md font-medium mb-2">{unitGroup.type}</h3>
                                <div className="grid gap-4">
                                    {unitGroup.units.map((unit) => (
                                        <div key={unit.name} className="">
                                            <Unit name={unit.name} img={unit.img} />
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
