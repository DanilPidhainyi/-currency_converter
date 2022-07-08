import {createStore} from "redux";


export const getResUnits = (currency1, currency2, units) => {
    return currency1 / currency2 * units
}

const defaultState = {
    unit1: 0,
    unit2: 0,
    currency1: 'USD',
    currency2: 'UAN',
    exchangeRate: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_EXCHANGE_RATE':
            return {...state, exchangeRate: action.payload}

        case 'SET_UNIT1':
            return {...state, unit1: action.payload}

        case 'SET_UNIT2':
            return {...state, unit2: action.payload}

        case 'SET_CURRENCY1':
            return {...state, currency1: action.payload}

        case 'SET_CURRENCY2':
            return {...state, currency2: action.payload}


        default:
            return state
    }
}
export const store = createStore(reducer)