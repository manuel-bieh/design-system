import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const StackOverflow = ({ className, label }: IconProps) => (
    <a href="https://stackoverflow.com/users/705377/manuel-bieh" className={classNames(className, css.wrapper)}>
        <img alt="Logo: StackOverflow" src={require(`../img/v2/stackoverflow.svg`)} className={css.icon} />
        {label && <span>{label}</span>}
    </a>
);

export default StackOverflow;
