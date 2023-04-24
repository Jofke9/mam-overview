import React, { useState, useEffect } from 'react';
import Unit from './Unit.jsx'

export default function BuilderUnits({ builderId }) {
    const [builderUnits, setBuilderUnits] = useState([]);
    useEffect(() => {
        const getAllBuilderUnits = async () => {
            const builderUnitsFromServer = await fetchBuilderUnits()
            setBuilderUnits(builderUnitsFromServer)
        }

        getAllBuilderUnits()
    }, [])

    // Fetch builder units
    const fetchBuilderUnits = async () => {
        const res = await fetch('http://localhost:5000/builderUnits')
        const data = await res.json()

        return data
    }

    const unitsForBuilder = builderUnits.find((type) => type.id === builderId)?.units;

    return (
        <div className="mt-4">
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                {unitsForBuilder?.map((unit, index) => (
                    <div key={index} className="w-full">
                        <Unit name={unit.name} img={unit.img} cost={unit.cost} researchCost={unit.researchCost} upgradeCosts={unit.upgradeCosts} needsCheck={unit.needsCheck} />
                    </div>
                ))}
            </div>
        </div>

    );
}
