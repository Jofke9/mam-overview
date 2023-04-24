import React, { useContext } from 'react'
import GlobalContext from './../GlobalContext';

export default function AddButton(cost) {

    const { isCalculating, setIsCalculating, totalCost, setTotalCost } = useContext(GlobalContext);

    const addToTotalCost = () => {
        let gold = totalCost.gold + cost.cost.gold
        let food = totalCost.food + cost.cost.food
        let metal = totalCost.metal + cost.cost.metal
        let mana = totalCost.mana + cost.cost.mana
        let oil = totalCost.oil + cost.cost.oil
        let crystal = totalCost.crystal + cost.cost.crystal
        let subdolak = totalCost.subdolak + cost.cost.subdolak

        setTotalCost({
            "gold": gold, "food": food, "metal": metal, "mana": mana, "oil": oil, "crystal": crystal,
            "subdolak": subdolak
        })
    }

    return (
        <>
            <button className=" ml-3 inline-flex items-center justify-center h-6 w-12 rounded-full bg-green-500 hover:bg-green-600" onClick={addToTotalCost}>
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>
        </>
    )
}
