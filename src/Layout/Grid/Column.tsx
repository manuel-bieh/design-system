import React, { useMemo } from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';

type Props = {
    // alignItems?: 'start' | 'end' | 'center';
    center?: boolean;
    children?: any;
    className?: string;
    element?: any;
    justifyContent?: 'start' | 'end' | 'center';
    style?: {};
    textAlign?: 'left' | 'right' | 'center';
    // Available sizes
    /* eslint-disable typescript-sort-keys/interface */
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    /* eslint-enable typescript-sort-keys/interface */
};

const Column = ({
    // alignItems,
    className,
    children,
    justifyContent,
    element: Element = 'div',
    textAlign,
    ...props
}: Props) => {
    const { xs = 12, sm, md, lg, xl } = props;

    const sizeClass = useMemo(
        () => ({
            [css[`col-xs${xs}` as 'col-$(size)']]: xs,
            [css[`col-sm${sm}` as 'col-$(size)']]: sm,
            [css[`col-md${md}` as 'col-$(size)']]: md,
            [css[`col-lg${lg}` as 'col-$(size)']]: lg,
            [css[`col-xl${xl}` as 'col-$(size)']]: xl,
        }),
        [lg, md, sm, xl, xs]
    );

    return (
        <Element
            className={classNames(
                css.col,
                sizeClass,
                textAlign !== undefined && (css[`textAlign-${textAlign}`] as Props['textAlign']),
                // alignItems && css[`alignItems-${alignItems}`],
                justifyContent && css[`justifyContent-${justifyContent}`],
                className
            )}
        >
            COL
            {children}
        </Element>
    );
};

export default Column;
