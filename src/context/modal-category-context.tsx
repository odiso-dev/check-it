import React from 'react';

interface ModalCategoryItem {
    categorySelected:string;
    setCategorySelected:()=>void;
    isSelected:boolean;
    setIsSelected:boolean;
}

export const ModalCategoryContext = React.createContext<ModalCategoryItem | null>(null);