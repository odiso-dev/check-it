import React from "react";
import {Info} from './info';
import {Logo} from './logo'
import {DarkMode} from './darkMode';
import classes from './header.module.css'

export const Header:React.FC = () =>{
    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <Info />
                <Logo/>
                <DarkMode/>
                </div>          
        </header>
    )
};