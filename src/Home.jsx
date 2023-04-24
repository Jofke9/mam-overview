import React, { useContext, useEffect } from 'react'
import isEqual from 'lodash/isEqual';
import GlobalContext from './GlobalContext.js';
import Overlay from './components/Overlay.jsx';
import Builder from './components/Builder.jsx';


export default function Home() {

    const { isCalculating, setIsCalculating, totalCost, setTotalCost } = useContext(GlobalContext);

    const handleClick = () => {
        setIsCalculating(!isCalculating);
    };

    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key == 't' || event.key == 'T') {
                setIsCalculating(!isCalculating);
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isCalculating]);

    let emptyComp = {
        "gold": 0,
        "food": 0,
        "metal": 0,
        "mana": 0,
        "oil": 0,
        "crystal": 0,
        "subdolak": 0
    }

    const resetCost = () => {
        setTotalCost(emptyComp);
    };

    let isEmpty = isEqual(emptyComp, totalCost)

    return (
        <div className="mb-12">
            <div className="fixed top-5 right-2 flex items-center justify-center text-center mr-5">
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Toggle cost calculator (T)
                </button>
            </div>
            {isCalculating && <Overlay isEmpty={isEmpty} totalCost={totalCost} resetCost={resetCost} />}
            <div className="overflow-auto scrollbar-hide flex items-center justify-between h-24 bg-blue-500 text-white w-full">
                <h1 className='text-4xl font-bold ml-3'> Overview Mines and Magic Troops </h1>
            </div>
            <Builder isCalculating={isCalculating} />
        </div>
    )
}