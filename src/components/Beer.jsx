import {useState} from 'react';
import PairModal from './PairModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Beer = (props) => {
    const [ isOpen , setIsOpen ] = useState(false)
    const showPairs = () => {
        setIsOpen(true)
    }
    const hidePairs = () => {
        setIsOpen(false)
    }
    return (
        <>
            <button onClick={showPairs}>{props.beer.name}</button>
            <PairModal isOpen={isOpen} hidePairs={hidePairs} drink={props.beer.name} food={props.beer.food}/>
        </>
    )
}

export default Beer;
