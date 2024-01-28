import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';

type Props = {
    [prop: string]: any;
    align?: 'start' | 'end' | 'stretch' | 'center';
    centered?: boolean;
    children: any;
    className?: string;
    el?: any;
    element?: any;
    fluid?: boolean;
    justifyContent?: 'start' | 'end' | 'center';
    seamless?: boolean;
    textAlign?: 'left' | 'right' | 'center';
};

const Grid = ({
    // align,
    centered,
    children,
    className,
    element: Element = 'div',
    justifyContent,
    fluid,
    seamless,
    textAlign = 'left',
    ...props
}: Props) => (
    <Element
        className={classNames(
            css.grid,
            className,
            {
                [css[`textAlign-${textAlign}`]]: Boolean(textAlign),
                // [css[`align-${align || ''}`]]: Boolean(align),
                [css.fluid]: fluid,
                [css.seamless]: seamless,
                [css.centered]: centered,
            },
            justifyContent && css[`justifyContent-${justifyContent}`]
        )}
        {...props}
    >
        {children}
    </Element>
);

export default Grid;
