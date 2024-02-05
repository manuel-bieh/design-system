import * as React from 'react';
import classNames from 'classnames';
import css from './Footer.module.css';

type Props = {
    children: any;
    className?: string;
};

export const Footer: React.FC<Props> = ({ children, className }: Props) => (
    <footer className={classNames(css.wrapper, className)}>{children}</footer>
);
