export interface Products{
    id:number;
    name:string;
    category_id:number;
    quantity: number;
    checked:boolean;
    created_by:string;
}
export interface ProductsVM{
    id:number;
    name:string;
    quantity: number;
    checked:boolean;
}