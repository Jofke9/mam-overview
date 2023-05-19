import React, { useState, useEffect } from 'react';
import BuilderUnits from './BuilderUnits.jsx';
import Unit from './Unit.jsx'

export default function Builder(props) {
    const [selectedBuilder, setSelectedBuilder] = useState(null); // state for the selected builder
    const [builders, setBuilders] = useState([]);
    const [baseUnits, setBaseUnits] = useState([]);

    useEffect(() => {
        const getAllBuilders = async () => {
            const buildersFromServer = await fetchBuilders()
            setBuilders(buildersFromServer)
        }

        getAllBuilders()
    }, [])

    // Fetch builders
    const fetchBuilders = async () => {
        const res = await fetch('http://localhost:5000/builders')
        const data = await res.json()

        return data
    }


    useEffect(() => {
        const getAllBaseUnits = async () => {
            const baseUnitsFromServer = await fetchBaseUnits()
            setBaseUnits(baseUnitsFromServer)
        }

        getAllBaseUnits()
    }, [])

    // Fetch base units
    const fetchBaseUnits = async () => {
        const res = await fetch('http://localhost:5000/baseUnits')
        const data = await res.json()

        return data
    }

    const handleBuilderChange = (event) => {
        setSelectedBuilder(builders.find((builder) => builder.id === parseInt(event.target.value)));
    };

    return (
        <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-50vh">
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
                        <div className="grid min-[950px]:grid-cols-4 sm:grid-cols-2 grid-cols-1">
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
            <div className="bg-gray-100 p-4 rounded-lg shadow-md h-1/5vh"></div>
        </div>
    );
}