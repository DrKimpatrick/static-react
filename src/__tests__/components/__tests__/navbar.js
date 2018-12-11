import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../../../components/navbar/navbar';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<Navbar/>)
    })
})