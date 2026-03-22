import React from 'react';
import classes from './product.module.css';
import { InputCheckbox } from '@/components/inputs/input-checbox-product/input-checkbox-product';
import { ItemCounter } from '@/components/buttons/button-item-counter/item-counter';
import { apiProducts, emptyProduct, mapperProducts } from '@/api/index';

export const Product: React.FC = () => {
  const [products, setProducts] = React.useState(emptyProduct());

  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await apiProducts();
      const productsMapper = mapperProducts(data);
      if (!error) {
        setProducts(productsMapper);
      } else {
        throw new Error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return products.map((product) => (
    <fieldset key={product.id} className={classes.fieldsetProduct}>
      <InputCheckbox checked={product.checked} name={product.name} />
      <ItemCounter quantity={product.quantity} />
    </fieldset>
  ));
};
