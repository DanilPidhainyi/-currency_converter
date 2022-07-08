import React from "react";
import logo from '../back_logo.png'
import classes from './Header.module.css'

export const Header = ({ courses }) => {
    return (
        <div className={classes.container} style={{ backgroundImage: `url(${logo})`}}>
            <div className={classes.course}>
                {courses.map(item => (
                    <div key={item.cc}>{item.cc} : {item.rate}</div>
                ))}
            </div>
        </div>
    )
}
