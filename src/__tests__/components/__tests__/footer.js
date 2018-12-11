import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../../../components/footer/footer';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<Footer/>)
    })
})