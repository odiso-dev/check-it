import React  from "react";
import {ModalCategoryContext} from './modal-category-context'

export const ModalCategoryProvider:React.FC = (props)=>{
    const {children} = props;
    const[categorySelected, setCategorySelected] =  React.useState('');

    return (
        <ModalCategoryContext.Provider value={{categorySelected, setCategorySelected}}>
            {children}
        </ModalCategoryContext.Provider>
    );
};