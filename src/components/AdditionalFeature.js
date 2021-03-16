
import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';


class AdditionalFeature extends React.Component {


  render(){
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button className="button" onClick={()=> this.props.addFeature(this.props.feature.id)}>Add</button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    car: state.car,

  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
