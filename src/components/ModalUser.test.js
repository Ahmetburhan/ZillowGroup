import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ModalUser from './ModalUser';

describe('ModalUser', () => {
    it('should render InputArea', () => {
        const wrapper = shallow(<ModalUser />);
        expect(wrapper.containsAllMatchingElements([
            <ModalBody />,
            <ModalFooter />
         ])).to.equal(true);
    });
});
