import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import * as selectors from '../../selectors';

class Home1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    console.log("second3");
    console.log(this.props.name);
  }

  render() {
    console.log(this.props);
    return (
      <View style={{marginTop:180,backgroundColor:"red"}}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.name1}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: selectors.getName(state),
    name1:selectors.getName1(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home1);
