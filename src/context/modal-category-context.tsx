import React from 'react';

interface ModalCategoryItem {
    categorySelected:string;
    setCategorySelected:()=>void;
}

export const ModalCategoryContext = React.createContext<ModalCategoryItem | null>(null);