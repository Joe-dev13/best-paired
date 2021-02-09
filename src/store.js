import { createStore } from 'redux';
import { userChoice } from './reducers'

const initialState = {
    beers: [],
    wine: [],
    savedDrinks: []
}

export const store = createStore( userChoice , initialState )