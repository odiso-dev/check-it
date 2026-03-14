import React from 'react';
import { InfoButton } from '@/components/buttons/button-modal';
import { Logo } from '@/components/logo';
import { DarkModeButton } from '@/components/buttons/button-dark-mode';
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
