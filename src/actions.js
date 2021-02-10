import { actionTypes } from './constants'

export function addToProfile( drinks ) {
    return{
        type: actionTypes.ADD_TO_PROFILE,
        payload: drinks
    }
}

export function findPairs( food ) {
    return{
        type: actionTypes.FIND_PAIRS,
        payload: food
    }
}

export function findWine( drinks ) {
    return{
        type: actionTypes.FIND_WINE,
        payload: drinks
    }
}

export function populateBeers( drinks ) {
    return{
        type: actionTypes.POPULATE_BEERS,
        payload: drinks
    };
};