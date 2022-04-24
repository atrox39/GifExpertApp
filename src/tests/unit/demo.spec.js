import React from 'react';
import { create } from 'react-test-renderer';
import Test from '../../components/Test';

describe('Demo Test', () => {
  const TEXT = 'Test';
  const component = create(<Test mensaje={TEXT} />);

  it('Simple test', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Debe tener un texto de la propiedad mensaje', async () => {
    const h1 = await component.root.findByType('h1');
    expect(h1.props.children).toEqual(TEXT);
  });
});
