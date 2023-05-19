import React, { useContext, useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual';
import GlobalContext from './GlobalContext.js';
import Overlay from './components/Overlay.jsx';
import Builder from './components/Builder.jsx';


export default function Home() {

    const { isCalculating, setIsCalculating, totalCost, setTotalCost } = useContext(GlobalContext);

    const handleClick = () => {
        setIsCalculating(!isCalculating);
    };

    const [isCalculatorVisible, setIsCalculatorVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.getElementById('overview-title');
            const titleRect = titleElement.getBoundingClientRect();
            const isTitleVisible = titleRect.top >= 0 && titleRect.bottom <= window.innerHeight;
            setIsCalculatorVisible(!isTitleVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 't' || event.key === 'T') {
                setIsCalculating(!isCalculating);
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isCalculating, setIsCalculating]);

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
            {isCalculatorVisible && (
                <div className="fixed top-5 right-1 flex items-center justify-center text-center md:hidden">
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                        Toggle cost calculator <span className='hidden md:block'>(T)</span>
                    </button>
                </div>)}

            <div className="fixed top-5 right-1 md:right-2 flex items-center justify-center text-center md:mr-5 hidden md:block">
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                    Toggle cost calculator (T)
                </button>
            </div>

            {isCalculating && <Overlay isEmpty={isEmpty} totalCost={totalCost} resetCost={resetCost} />}
            <div id="overview-title" className="overflow-auto scrollbar-hide flex items-center justify-between h-24 bg-blue-500 text-white w-full">
                <h1 className='text-xl md:text-4xl font-bold ml-3'> Overview Mines and Magic Troops </h1>
            </div>
            <Builder isCalculating={isCalculating} />
        </div>
    )
}