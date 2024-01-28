import { Meta, StoryFn } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args}>Content</Footer>;

export const Primary = Template.bind({});
