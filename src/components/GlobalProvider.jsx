import React, { useState } from 'react';
import GlobalContext from '../GlobalContext.js';

function GlobalProvider(props) {
    const [isCalculating, setIsCalculating] = useState('');
    const [totalCost, setTotalCost] = useState({
        "gold": 0,
        "food": 0,
        "metal": 0,
        "mana": 0,
        "oil": 0,
        "crystal": 0,
        "subdolak": 0
    });

    return (
        <GlobalContext.Provider value={{ isCalculating, setIsCalculating, totalCost, setTotalCost }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;