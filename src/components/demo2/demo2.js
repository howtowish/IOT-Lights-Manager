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
    console.log("second2");
    console.log(this.props.name);
  }
  onSubmitName1() {
    //Khởi tạo các biến redux từ actions
    this.props.onSubmitName1({ name: this.props.name,name1:this.props.name1 });
    // Actions[Const.Router.DEMO2_SCREEN]();
  }
  render() {
    console.log(this.props);
    return (
      <View style={{marginTop:150,backgroundColor:"blue"}}>
      <TouchableOpacity onPress={()=>this.onSubmitName1()}>
        <Text>Next</Text>
      </TouchableOpacity>
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
