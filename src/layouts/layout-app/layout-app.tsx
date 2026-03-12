import React from 'react';
import classes from './layout-app.module.css';

export const LayoutApp: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className={classes.layout}>{children}</div>;
};
