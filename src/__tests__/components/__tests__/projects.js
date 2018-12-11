import React from 'react';
import {shallow} from 'enzyme';
import Projects from '../../../components/projects/projects';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<Projects/>)
    })
})