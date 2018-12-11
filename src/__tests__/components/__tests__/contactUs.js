import React from 'react';
import {shallow} from 'enzyme';
import ContactUs from '../../../components/contactUs/contactUs';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<ContactUs/>)
    })
})