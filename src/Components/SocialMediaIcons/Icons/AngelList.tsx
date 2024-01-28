import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const AngelList = ({ className, label }: IconProps) => (
    <a href="https://angel.co/manuelbieh" className={classNames(className, css.wrapper)}>
        <img alt="Logo: AngelList" src={require('../img/angellist.svg')} className={css.icon} />
        {label && <span>{label}</span>}
    </a>
);

export default AngelList;
