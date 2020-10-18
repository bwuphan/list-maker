import React from 'react';
import { shallow } from 'enzyme';
import CreateList from './CreateList';

describe('<CreateList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CreateList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
