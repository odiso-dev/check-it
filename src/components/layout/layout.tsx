import React from 'react';
import classes from './layout.module.css';

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className={classes.layout}>{children}</div>;
};
