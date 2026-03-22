import type { Categories } from './api.categories.model';
import { supabase } from '@/services/supabase-client';

export const apiCategories = async (): Promise<Categories[]> => {
  try {
    return await supabase.from('categories').select('*');
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

export const emptyCategories = (): Categories[] => [
  {
    id: 0,
    name: '',
    created_by: '',
  },
];
