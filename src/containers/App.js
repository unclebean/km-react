import React, {
    Component
} from 'react';
import InputPreview from '../components/InputPreview';
import {setMessage, setErrorMessage} from '../actions/message';
import {
    connect
} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
require('./App.scss');

class App extends Component {
    _onChange = (value) => {
        if(value === 'error'){
            this.props.dispatch(setErrorMessage(value));
        } else {
            this.props.dispatch(setMessage(value))
        }
    }
    render() {
        const {message} = this.props.messageReducer;
        const {error} = this.props.messageReducer;
        if(error){
            return <Redirect to='/about'/>;
        } else {
            return (
                <div className="test">
                <InputPreview
                  value={message}
                  onChange={this._onChange}/>
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
              </div>)
        }
        
    }
}

App.propTypes = {
    messageReducer: PropTypes.string,
    dispatch: PropTypes.func
};

export default connect(state => state)(App);