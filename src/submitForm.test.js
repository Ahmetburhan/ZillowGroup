import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SubmitForm from './components/SubmitForm';

describe('This will be testing submit functionality of SubmitForm', () => {
    it('should call onSubmit when send button is clicked', () => {
        wrapper.find('[type="submit"]').simulate('click')
        expect(preventDefault).toBeCalled();
    })
    it('should add an item based on the value in the state', () => {
        const component = shallow(<SubmitForm />);
        const preventDefault = jest.fn();
        component.find('form').simulate('submit', { preventDefault });
        expect(toJson(component)).toMatchSnapshot();
        expect(preventDefault).toBeCalled();
    });

});

describe('SubmitForm', () => {
    it('should render InputArea', () => {
        const wrapper = shallow(<SubmitForm />);
        expect(wrapper.containsAllMatchingElements([
            <InputArea />,
        ])).to.equal(true);
    });
});

describe('<input />', () => {

    it('`<input>` element should be of type `text`', () => {
        expect(
            wrapper.find('form').childAt(0).props().type
        ).toBe('text');
    });
});