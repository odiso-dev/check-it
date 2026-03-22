// import { Categories } from './api.categories.model';
import { supabase } from '@/services/supabase-client';

export const apiCategories = async () => {
  try {      
    return await supabase.from('categories').select('*');
  } catch (error) {
    console.error('Error loading data:', error.message);
  }
};

export const emptyCategories = () => [
  {
    id: 0,
    name: '',
    created_by: '',
  },
];
