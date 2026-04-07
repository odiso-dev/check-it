import React from 'react';
import { ChannelRealtimeContext } from './channel-context';
import { emptyCategories, apiCategories, apiProducts, emptyProduct } from '@/api/index';
import { supabase } from '@/services/supabase-client';

export const ChannelRealtimeProvider: React.FC = (props) => {
  const { children } = props;
  const [categories, setCategories] = React.useState(emptyCategories());
  const [products, setProducts] = React.useState(emptyProduct());

  React.useEffect(() => {
    // Fetching all data
    const fetchData = async () => {
      const [resCategories, resProducts] = await Promise.allSettled([
        apiCategories(),
        apiProducts(),
      ]);
      // Categories
      if (resCategories.status === 'fulfilled') {
        const { data, error } = resCategories.value;
        if (!error) {
          setCategories(data);
        } else {
          console.log('Error loading categories:', error);
        }
      }

      // Products
      if (resProducts.status === 'fulfilled') {
        const { data, error } = resProducts.value;
        if (!error) {
          setProducts(data);
        } else {
          console.log('Error loading products:', error);
        }
      }
    };
    fetchData();

    // LISTENER REALTIME SUPABASE
    const channel = supabase
      .channel('db-changes')
      // Products listener
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'products' },
        (payload) => {
          console.log('Product changed:', payload);
          // Update products state
        },
      )
      // Categories listener
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'categories' },
        (payload) => {
          console.log('Category changed:', payload);
          // Update categories state
          fetchData();
        },
      )
      .subscribe();
    // .subscribe((status)=>console.log(status));

    // Cleanup channel
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <ChannelRealtimeContext.Provider value={{ categories , products}}>
      {children}
    </ChannelRealtimeContext.Provider>
  );
};
