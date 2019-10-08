import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from './index';
import { Search } from '../container/index';

// shallow, render, mount.
describe('Layout <App/> component', () => {
  let appComponent;
  beforeEach(() => {
    appComponent = shallow(<App />);
  });

  it('renders the Search component.', () => {
    const search = appComponent.find(Search);
    expect(search).to.have.lengthOf(1);
  });

  it('renders the header section.', () => {
    const header = appComponent.find('div header');
    expect(header).to.have.lengthOf(1);
  });

  it('renders a image on header section.', () => {
    const img = appComponent.find('div header img');
    expect(img.prop('src')).to.be.a('string', 'logo.25bf045c.svg');
  });
});

