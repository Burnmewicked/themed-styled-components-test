import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import BaseButton from '../../components/BaseButton/BaseButton';
import Menu from '../../components/Menu/Menu';
import Banner from '../../components/Banner/Banner';
import InputBlock from '../../components/InputBlock/InputBlock';

class Homepage extends Component {
    render() {
        return (
            <Aux>
                <Menu />
                <Banner />
                <InputBlock />
            </Aux>
        );
    }
};

export default Homepage;