import { Meta } from '@storybook/react';
import { GitHub, Instagram, Linkedin, Quora, Twitter, X } from './Icons';
import { SocialMediaIcons } from '.';

export default {
    title: 'Components/Social Media Icons',
    component: SocialMediaIcons,
    argTypes: {},
} as Meta<typeof SocialMediaIcons>;

export const Primary = () => <SocialMediaIcons />;

export const WithLabels = () => (
    <>
        <GitHub label="manuelbieh" />
        <br />
        <Twitter label="@manuelbieh" />
        <br />
        <X label="@manuelbieh" />
        <br />
        <Linkedin label="/in/manuelbieh" />
        <br />
        {/* <Xing />
        <br /> */}
        <Instagram label="@manuelbieh" />
        <br />
        <Quora label="@manuelbieh" />
        <br />
        {/* <AngelList label="AngelList" />
        <br /> */}
    </>
);

export const WithHiddenServices = () => <SocialMediaIcons hidden={['quora', 'instagram']} />;
