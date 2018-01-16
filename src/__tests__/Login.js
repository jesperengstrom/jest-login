import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const wrapper = mount(<Login loginSuccessful={jest.fn} />);
  wrapper.setState({email: 'blaj', password: 'blaj'});
  wrapper.find('[type="submit"]').simulate('submit');
  expect(wrapper.state().message.type).toEqual('ERROR');
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  wrapper.setState({email: 'jesper@jesper.se', password: 'dhfhghH7'});
  wrapper.find('[type="submit"]').simulate('submit');
  expect(fakeLogin).toHaveBeenCalled();
});

it('simulate email handleChange', ()=> {
  const email = 'jesper@jesper.se';
  const wrapper = mount(<Login loginSuccessful={jest.fn} />);
  wrapper.find('[type="email"]').simulate('change', { target: {name: 'email', value: email}});
  expect(wrapper.state().email).toEqual(email);
})