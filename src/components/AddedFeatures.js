import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';



class AddedFeatures extends React.Component {
  
  render(){
  return (
    <div className="content">
      <h6>Added features:</h6>
      {this.props.addedFeatures.length ? (
        <ol type="1">
          {this.props.addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
  }

};

const mapStateToProps = (state) => {
  return {
    addedFeatures: state.car.features,
  }
}

export default connect(mapStateToProps)(AddedFeatures);