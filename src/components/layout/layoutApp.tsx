import React from 'react';
import classes from './layoutApp.module.css';

export const LayoutApp: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className={classes.layout}>{children}</div>;
};
