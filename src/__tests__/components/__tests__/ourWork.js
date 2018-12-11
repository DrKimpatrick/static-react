import React from 'react';
import {shallow} from 'enzyme';
import OurWork from '../../../components/ourWork/ourWork';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<OurWork/>)
    })
})