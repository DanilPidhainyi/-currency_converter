import React from "react";
import classes from  './Converter.module.scss';
import arrows from '../arrows.png'
import {Currency} from "./Сurrency";


export const Converter = ({currency}) => {

    const element1 = {
            unit: 'unit1',
            currency: 'currency1',
            anotherCurrency: 'currency2',
            setUnitMY: 'SET_UNIT1',
            setAnotherUnit: 'SET_UNIT2',
            setCurrency: 'SET_CURRENCY1',
            setAnotherCurrency: 'SET_CURRENCY2'
        }

    const element2 =  {
            unit: 'unit2',
            currency: 'currency2',
            anotherCurrency: 'currency1',
            setUnitMY: 'SET_UNIT2',
            setAnotherUnit: 'SET_UNIT1',
            setCurrency: 'SET_CURRENCY2',
            setAnotherCurrency: 'SET_CURRENCY1'
        }

    return (
        <div className={classes.container}>
            <div className={classes.bloc}>
                <Currency currencies={currency} element={element1}/>
                <img className={classes.img} src={arrows} width={'60px'} height={'60px'}/>
                <Currency currencies={currency} element={element2}/>
            </div>
        </div>
    )
}