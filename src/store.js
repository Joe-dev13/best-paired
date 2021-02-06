import { createStore } from 'redux';
import { userChoice } from './reducers'

const initialState = {
    beers: [],
    wine: []
}

export const store = createStore( userChoice , initialState )