import React from 'react';
import PropTypes from 'prop-types';

export default class InputPreview extends React.Component {
 render () {
   return (
    <div>
       <input
         type="text"
         value={this.props.value}
         onChange={e => this.props.onChange(e.target.value)}
       />
     </div>
   )
 }
}

InputPreview.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};