import React, { Component } from 'react';
import { Header } from '../../../Common';
import Description from '../../components/Description/Description';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Description />
            </div>
        );
    }
}

export default Home;