import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App user="" />)
  expect(wrapper.text()).toBeTruthy()
});

it('should render <App /> with user', () => {
  const wrapper = shallow(<App user="jesper@jesper.se" />);
  expect(wrapper.find('div').text()).toContain("jesper@jesper.se")

});

it('call the internal method loginSuccessful', () => {
  const email = 'jeppe@jeppe.se';
  const wrapper = mount(<App user="" />);
  wrapper.instance().loginSuccessful(email);
  expect(wrapper.state().user).toEqual(email);
});

it('call the internal method logout', () => {
  const wrapper = mount(<App user="jesper@jesper.se" />)
  wrapper.instance().logout();
  expect(wrapper.state().user).toBeFalsy();
});