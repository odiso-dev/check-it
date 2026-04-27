import React from 'react';
import { Logo } from '@/components/logo';
import { DarkModeButton } from '@/components/buttons/button-dark-mode';
import { Login } from '@/components/buttons/button-login/button-login';
import classes from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <DarkModeButton />        
        <Logo />
        <Login />
      </div>
    </header>
  );
};
