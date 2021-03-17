import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';


class AddedFeature extends React.Component {

  render(){
    console.log(this.props.feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> this.props.removeFeature(this.props.feature.id)}>X</button>
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

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
