import React, { useEffect } from 'react';

export default function Overlay(props) {
    const resetCost = () => {
        props.resetCost();
    };

    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key == 'r' || event.key == 'R') {
                resetCost();
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 lg:w-3/4 bg-blue-200 flex flex-row items-center justify-between border border-blue-500 rounded-md p-2 mb-10">
            <div className="flex text-black py-2 pl-4 text-xl justify-center w-full font-bold">
                Total cost:
            </div>
            <div className="flex ml-5 justify-center w-full">
                {props.isEmpty && ((
                    <div className="mr-2 flex items-center">
                        <img
                            src={`../images/resources/gold.png`}
                            alt={`gold`}
                            className="w-5 h-auto mr-1"
                        />
                        <span className="text-xl font-medium mr-4 text-black">0</span>
                    </div>
                ))}
                {Object.entries(props.totalCost).map(([resource, amount]) => {
                    if (amount !== 0) {
                        return (
                            <div key={resource} className="mr-2 flex items-center">
                                <img
                                    src={`../images/resources/${resource}.png`}
                                    alt={`${resource}`}
                                    className="w-5 h-auto mr-1"
                                />
                                <span className="text-xl font-medium mr-4 text-black">{amount}</span>
                            </div>
                        );
                    }
                })}
            </div>
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded flex justify-between items-center" onClick={resetCost}>
                Reset<span className="ml-2">(R)</span>
            </button>
        </div>
    );
}
