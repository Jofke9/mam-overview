import React, { useState } from 'react';
import Unit from './Unit.jsx';

export default function Builder() {
    const [selectedBuilder, setSelectedBuilder] = useState(undefined); // state for the selected builder

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

    const handleBuilderChange = (event) => {
        setSelectedBuilder(event.target.value);
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mt-4">
                <label htmlFor="builder" className="text-lg font-medium block mb-2">Choose a builder:</label>
                <select
                    id="builder"
                    className="block appearance-none w-full py-2 px-3 border border-gray-400 rounded-md shadow-sm leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                    value={selectedBuilder}
                    onChange={handleBuilderChange}
                >
                    <option value="">Select a builder...</option>
                    {builders.map((builder) => (
                        <option key={builder.id} value={builder.id}>
                            {builder.name}
                        </option>
                    ))}
                </select>
                {selectedBuilder && (
                    <div className="mt-4">
                        <img
                            src={builders[selectedBuilder - 1]?.img}
                            alt={`Builder ${selectedBuilder}`}
                            className="w-40 h-40 object-cover rounded-md shadow-md" de
                        />
                        <Unit builderId={selectedBuilder} /> {/* render the Unit component with the selected builder */}
                    </div>
                )}
            </div>
        </div>
    );
}
