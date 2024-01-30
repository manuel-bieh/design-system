// import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Frontend } from '.';

export default {
    title: 'Components/Frontend',
    component: Frontend,
    argTypes: {},
} as Meta<typeof Frontend>;

const Template: StoryFn<typeof Frontend> = () => <Frontend />;

export const Primary = Template.bind({});
