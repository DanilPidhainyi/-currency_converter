import React from "react";
import classes from  './Converter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getResUnits} from "./subsidiary";


export const Currency = ({currencies, element}) => {

    const dispatch = useDispatch()
    const units = useSelector(state => state[element.unit])
    const currency = useSelector(state => state[element.currency])
    const anotherCurrency = useSelector(state => state[element.anotherCurrency])
    const exchangeRate = useSelector(state => state.exchangeRate)

    const getCurrencyNumber = (currency) => {
        if (currency === 'UAN')
            return 1
        return exchangeRate.filter(item => item.cc === currency)[0].rate

    }

    const getResUnits = (currency1, currency2, unit) => {
        return getCurrencyNumber(currency1) / getCurrencyNumber(currency2) * unit
    }

    const handleInput = event => {
        dispatch({type: element.setUnitMY, payload: event.target.value});
        dispatch({type: element.setAnotherUnit, payload: getResUnits(currency, anotherCurrency, event.target.value)});
    };

    const handleSelect = event => {
        dispatch({type: element.setCurrency, payload: event.target.value});
    };

    return (
        <div className={classes.currencyContainer}>
            <div className={classes.formGroup}>
                <input type="number" className={classes.formField} placeholder="Units" value={units} onInput={handleInput}/>
                <label htmlFor="Units" className={classes.formLabel}>Units:</label>
            </div>
            <select className={classes.currencySelect} value={currency} onInput={handleSelect}>
                {currencies.map( item => (<option key={item}>{item}</option>))}
            </select>
        </div>
    )
}