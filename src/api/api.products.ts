import type { Products, ProductsVM } from './api.products.model';
import { supabase } from '@/services/supabase-client';

export const apiProducts = async (): Promise<Products[]> => {
  try {
    return await supabase.from('products').select('*');
  } catch (error) {
    throw new Error('Error loading data:', error);
  }
};

export const emptyProduct = (): ProductsVM[] => [
  {
    id: 0,
    name: '',
    category_id:0,
    quantity: 0,
    checked: false,
  },
];

export const mapperProducts = (apiProducts: Products[]): ProductsVM[] => {
  return apiProducts.map((product) => ({
    id: product.id,
    name: product.name,
    category_id: product.category_id,
    quantity: product.quantity,
    checked: product.checked,
  }));
};
