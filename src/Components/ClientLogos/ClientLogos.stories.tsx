import { Meta, StoryFn } from '@storybook/react';
import { ClientLogos } from '.';

export default {
  title: 'Components/ClientLogos',
  component: ClientLogos,
  argTypes: {},
} as Meta<typeof ClientLogos>;

const Template: StoryFn<typeof ClientLogos> = () => <ClientLogos />;

export const Primary = Template.bind({});
