import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Header } from '.';

// import { Example } from '..';

export default {
    title: 'Layout/Header',
    component: Header,
    argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args}>Content</Header>;

export const Primary = Template.bind({});
