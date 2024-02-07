import * as React from 'react';
import { Github, Twitter, Linkedin, Instagram, Quora, StackOverflow } from './Icons';

type Props = {
    className?: string;
    hidden?: ('github' | 'twitter' | 'xing' | 'linkedin' | 'instagram' | 'quora' | 'stackoverflow')[];
    iconClassName?: string;
};

export const SocialMediaIcons = ({ className, iconClassName, hidden }: Props) => (
    <section className={className}>
        {(hidden === undefined || hidden.includes('github') === false) && <Github className={iconClassName} />}
        {(hidden === undefined || hidden.includes('twitter') === false) && <Twitter className={iconClassName} />}
        {(hidden === undefined || hidden.includes('linkedin') === false) && <Linkedin className={iconClassName} />}
        {/* {(hidden === undefined || hidden.includes('xing') === false) && <Xing className={iconClassName} />} */}
        {(hidden === undefined || hidden.includes('instagram') === false) && <Instagram className={iconClassName} />}
        {(hidden === undefined || hidden.includes('quora') === false) && <Quora className={iconClassName} />}
        {(hidden === undefined || hidden.includes('stackoverflow') === false) && (
            <StackOverflow className={iconClassName} />
        )}
        {/* <AngelList className={iconClassName} /> */}
    </section>
);
