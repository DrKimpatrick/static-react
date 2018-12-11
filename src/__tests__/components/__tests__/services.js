import React from 'react';
import {shallow} from 'enzyme';
import Services from '../../../components/services/services';

describe('render contactUs component', () => {
    let wrapper;
    it('should render wiithout failing', () => {
        wrapper = shallow(<Services/>)
    })
})