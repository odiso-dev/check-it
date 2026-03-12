import React from 'react';
import { InfoButton } from '../buttons/infoModalButton';
import { Logo } from '../logo';
import { DarkModeButton } from '../buttons/darkModeButton';
import classes from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <InfoButton />
        <Logo />
        <DarkModeButton />
      </div>
    </header>
  );
};
