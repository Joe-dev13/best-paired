import { actionTypes } from './constants'

// const [ error, setError ] = useState(null);
// const [ isLoaded, setIsLoaded ] = useState(false);
// const [ state , setState ] = useState([]);

const initialState = {
    beers : [],
    wine : [],
    savedDrinks: [],
}

export function userChoice( state = initialState , action ) {
    switch(action.type) {
        case actionTypes.FIND_WINE:
            return {
                ...state,
                wine: [
                    ...action.payload
                ]
            };
        case actionTypes.ADD_TO_PROFILE:
            return {
                ...state,
                savedDrinks: [
                    ...action.payload
                ]
            }
        case actionTypes.POPULATE_BEERS:
            return {
                ...state,
                beers: [
                    ...action.payload
                ]
            };
        default:
            return state;
    }
}