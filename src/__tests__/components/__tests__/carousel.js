import React from 'react';
import {shallow} from 'enzyme';
import Carousel from '../../../components/carousel/carousel';

describe('render carousel section', () => {
    let wrapper;
    it('should render carousel component without fail', () => {
        wrapper = shallow(<Carousel/>)
    })
})