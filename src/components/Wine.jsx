import { useState } from 'react'
import PairModal from './PairModal';

export default function Wine(props) {

    const [ isOpen , setIsOpen ] = useState(false)
    const showPairs = () => {
        setIsOpen(true)
    }
    const hidePairs = () => {
        setIsOpen(false)
    }
    return (
        <>
            <button onClick={showPairs}>{props.wine.wineName}</button>
            <PairModal isOpen={isOpen} hidePairs={hidePairs} drink={props.wine.wineName} food={props.wine.food}/>
        </>
    )
    
}
