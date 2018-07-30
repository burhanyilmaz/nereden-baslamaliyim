import React, { Component } from 'react';
import { Header, Footer } from '../../../Common';
import Description from '../../components/Description/Description';
import ComputerFields from '../../components/ComputerFields/ComputerFields';
import Round from 'react-round';
class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Description />
                <Round
                    backgroundColor="#f4f4f4b0"
                    position="null,null,500,10"
                    size={40}
                />
                <ComputerFields />
                <Footer />
            </div>
        );
    }
}

export default Home;