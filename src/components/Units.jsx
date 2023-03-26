import React from 'react';
import Unit from './Unit.jsx'

export default function Units({ builderId }) {
    const units = [
        {
            id: 1,
            units: [
                {
                    name: "Crusader",
                    img: "../images/units/BuilderUnits/crusader.png",
                    cost: { food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Archer",
                    img: "../images/units/BuilderUnits/archer.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }

                    ]
                },
                {
                    name: "High elf",
                    img: "../images/units/BuilderUnits/high_elf.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
        {
            id: 2,
            units: [
                {
                    name: "Crack elf",
                    img: "../images/units/BuilderUnits/crack_elf.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Slith",
                    img: "../images/units/BuilderUnits/slith.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Arcanevoid",
                    img: "../images/units/BuilderUnits/arcanevoid.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
        {
            id: 3,
            units: [
                {
                    name: "Mercyless",
                    img: "../images/units/BuilderUnits/mercyless.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Faceless",
                    img: "../images/units/BuilderUnits/faceless.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Banshee",
                    img: "../images/units/BuilderUnits/banshee.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
        {
            id: 4,
            units: [
                {
                    name: "Skeleton",
                    img: "../images/units/BuilderUnits/skeleton.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Ogre",
                    img: "../images/units/BuilderUnits/ogre.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
                {
                    name: "Fungal monster",
                    img: "../images/units/BuilderUnits/fungal.png",
                    cost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ]
                },
            ],
        },
    ];

    const unitsForBuilder = units.find((type) => type.id === builderId)?.units;

    return (
        <div className="mt-4">
            <div className="grid grid-cols-3 gap-4">
                {unitsForBuilder?.map((unit, index) => (
                    <div key={index} className="w-full">
                        <Unit name={unit.name} img={unit.img} />
                    </div>
                ))}
            </div>
        </div>

    );
}
