import React from 'react';
import classes from './toast.module.css';
import IconSuccess from '@/assets/icons/icon-success.svg?react';
import IconInfo from '@/assets/icons/icon-info.svg?react';
import IconWarning from '@/assets/icons/icon-warning.svg?react';
import IconAlert from '@/assets/icons/icon-alert.svg?react';

interface Props {
  title: string;
  text: string;
  type: ToastType;
}

type ToastType = 'success' | 'info' | 'warning' | 'alert';

// An object that associates each type with its icon 
const iconMap = {
  success: <IconSuccess />,
  info: <IconInfo />,
  warning: <IconWarning />,
  alert: <IconAlert />,
};

export const Toast: React.FC<Props> = (props) => {
  const { title, text, type } = props;
  return (
    <div className={`${classes.containerToast} ${classes.animate}`}>
      <div
        className={`${classes.toast} ${type} ${classes[type]}`}
        role="status"
        aria-live="polite"
        title={title}
      >
        <div className={classes.icon}>
          {iconMap[type]}
        </div>
        <div className={classes.message}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
