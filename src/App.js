import React, { useEffect, useState } from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Converter} from "./components/Converter";
import {useDispatch, useSelector} from "react-redux";

const BASE_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
const currency = ['UAN', 'USD', 'EUR']

function App() {

    const dispatch = useDispatch()
    const exchangeRate = useSelector(state => state.exchangeRate)

    console.log(exchangeRate)

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => dispatch({
                type: 'SET_EXCHANGE_RATE',
                payload: data.filter(item => currency.includes(item.cc))
            }))
    }, [])

    return (
        <div className="App">
            <Header courses={exchangeRate}/>
            <Converter currency={currency}></Converter>
        </div>
    );
}

export default App;
