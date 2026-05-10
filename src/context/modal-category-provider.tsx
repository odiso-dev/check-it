import React  from "react";
import {ModalCategoryContext} from './modal-category-context'

export const ModalCategoryProvider:React.FC = (props)=>{
    const {children} = props;
    const[categorySelected, setCategorySelected] =  React.useState('');
    const[isSelected, setIsSelected] = React.useState(false);
    const [categoryModalId, setCategoryModalId] = React.useState(null);

    return (
        <ModalCategoryContext.Provider value={{categorySelected, setCategorySelected, isSelected, setIsSelected, categoryModalId,setCategoryModalId}}>
            {children}
        </ModalCategoryContext.Provider>
    );
};