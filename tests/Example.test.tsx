import React from 'react';
import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { Header } from '../src';

it('renders correctly', () => {
    const tree = renderer.create(<Header>Test</Header>).toJSON();
    expect(tree).toMatchSnapshot();
});
