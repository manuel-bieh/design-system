// import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import TechLogos from '.';

export default {
  title: 'Components/TechLogos',
  component: TechLogos,
  argTypes: {},
} as Meta<typeof TechLogos>;

const Template: StoryFn<typeof TechLogos> = () => <TechLogos />;

export const Primary = Template.bind({});
