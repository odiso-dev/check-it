import React from 'react';

interface ModalCategoryItem {
    categorySelected:string;
    setCategorySelected:()=>void;
    isSelected:boolean;
    setIsSelected: (v: boolean) => void
    categoryModalId:number | null;
    setCategoryModalId:number | null;
}

export const ModalCategoryContext = React.createContext<ModalCategoryItem | null>(null);