import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/style.scss';

class Home extends Component {

    increaseCounter() {
        const { counter, changeCounter } = this.props;

        return changeCounter(counter + 1);
    }

    decreaseCounter() {
        const { counter, changeCounter } = this.props;

        return changeCounter(counter - 1);
    }

    render() {
        const { counter } = this.props;

        return(
            <div>
                <h3>Nereden Başlamalıyım Proje Başlangıç</h3>
                <div className="container">
                    <div className="column minus" onClick={() => this.decreaseCounter()}>
                        <span>−</span>
                    </div>
                    <div className="column">
                        <h1 className="counter">{counter}</h1>
                    </div> 
                    <div className="column plus" onClick={() => this.increaseCounter()}>
                        <span>+</span>                    
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    counter: PropTypes.number.isRequired,
    changeCounter: PropTypes.func.isRequired,
}

export default Home;