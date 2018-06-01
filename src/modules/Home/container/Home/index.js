import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATE_HOME } from '../../constants';
import { changeCounter } from '../../actions/HomeActions';
import Home from './Home';

const mapStateToProps = state => {
    const { counter } = state[STATE_HOME];

    return { counter };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCounter: bindActionCreators(changeCounter, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
