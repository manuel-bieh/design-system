import * as React from 'react';
import css from './Footer.module.css';

type PropsT = {
    children: any;
};

export const Footer = ({ children }: PropsT) => <footer className={css.wrapper}>{children}</footer>;
