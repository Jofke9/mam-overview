import React from 'react';
import Unit from './Unit.jsx'

export default function BuilderUnits({ builderId }) {
    const units = [
        {
            id: 1,
            units: [
                {
                    name: "Crusader",
                    img: "../images/units/BuilderUnits/crusader.png",
                    cost: { gold: 31, food: 1, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 80, food: 4, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 106, food: 10, metal: 10, mana: 20, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false

                },
                {
                    name: "Archer",
                    img: "../images/units/BuilderUnits/archer.png",
                    cost: { gold: 56, food: 0, metal: 1, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 86, food: 0, metal: 6, mana: 0, oil: 0, crystal: 0, subdolak: 0 }

                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "High elf",
                    img: "../images/units/BuilderUnits/high_elf.png",
                    cost: { gold: 110, food: 0, metal: 0, mana: 18, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 180, food: 0, metal: 0, mana: 28, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
            ],
        },
        {
            id: 2,
            units: [
                {
                    name: "Crack elf",
                    img: "../images/units/BuilderUnits/crack_elf.png",
                    cost: { gold: 19, food: 0, metal: 1, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 60, food: 0, metal: 3, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Slith",
                    img: "../images/units/BuilderUnits/slith.png",
                    cost: { gold: 67, food: 0, metal: 4, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 115, food: 0, metal: 8, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Arcanevoid",
                    img: "../images/units/BuilderUnits/arcanevoid.png",
                    cost: { gold: 118, food: 0, metal: 6, mana: 5, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 115, food: 0, metal: 15, mana: 10, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
            ],
        },
        {
            id: 3,
            units: [
                {
                    name: "Mercyless",
                    img: "../images/units/BuilderUnits/mercyless.png",
                    cost: { gold: 31, food: 0, metal: 0, mana: 8, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 60, food: 0, metal: 0, mana: 16, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Faceless",
                    img: "../images/units/BuilderUnits/faceless.png",
                    cost: { gold: 75, food: 0, metal: 0, mana: 20, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 150, food: 0, metal: 0, mana: 32, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Banshee",
                    img: "../images/units/BuilderUnits/banshee.png",
                    cost: { gold: 112, food: 0, metal: 0, mana: 38, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 156, food: 0, metal: 0, mana: 56, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
            ],
        },
        {
            id: 4,
            units: [
                {
                    name: "Skeleton",
                    img: "../images/units/BuilderUnits/skeleton.png",
                    cost: { gold: 12, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 39, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                        { gold: 56, food: 0, metal: 0, mana: 20, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Ogre",
                    img: "../images/units/BuilderUnits/ogre.png",
                    cost: { gold: 50, food: 4, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 90, food: 8, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
                },
                {
                    name: "Fungal monster",
                    img: "../images/units/BuilderUnits/fungal.png",
                    cost: { gold: 110, food: 8, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    upgradeCosts: [
                        { gold: 136, food: 12, metal: 0, mana: 8, oil: 0, crystal: 0, subdolak: 0 }
                    ],
                    researchCost: { gold: 0, food: 0, metal: 0, mana: 0, oil: 0, crystal: 0, subdolak: 0 },
                    needsCheck: false
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
                        <Unit name={unit.name} img={unit.img} cost={unit.cost} researchCost={unit.researchCost} upgradeCosts={unit.upgradeCosts} needsCheck={unit.needsCheck} />
                    </div>
                ))}
            </div>
        </div>

    );
}
