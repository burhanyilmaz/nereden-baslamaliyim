import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../container/Home/Home';


describe('Hone Component Testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('Home component snapshot testing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Home'da bulunan string'lerin kontrolü.", () => {
        const wrapper = shallow(<Home />);

        expect(wrapper.text()).toContain('Nereden Başlamalıyım Proje Başlangıç');
        expect(wrapper.text()).toContain('+');
        expect(wrapper.text()).toContain('−');
    });
});
