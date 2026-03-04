import React from "react";
import {InfoModal} from '@/components/modals/infoModal';
import classes from './main.module.css'

export const Main:React.FC = () =>{
    return(
        <main className={classes.main}>
            <InfoModal/>
        </main>
    );
};