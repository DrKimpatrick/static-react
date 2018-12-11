import React from 'react';
import {shallow} from 'enzyme';

import About from '../../../components/about/about';

describe('render the about section', () => {
    let wrapper;
    it('should render the about component without failing', () => {
        wrapper = shallow(<About/>)
    })
})