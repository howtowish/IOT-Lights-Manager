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
import styles from './Demo.styles';
import * as selectors from '../../selectors';
import { Actions } from 'react-native-router-flux';
import Const from '../../constants';

class Home extends Component {

  constructor(props) {
    super(props);
    this.onSubmitName1 = this.onSubmitName1.bind(this);
    this.state = {
      input: '',
      input1:"",
    };
    console.log("first1");
  }

  onSubmitName1() {
    //Khởi tạo các biến redux từ actions
    this.props.onSubmitLogin({ name: this.state.input,name1:this.state.input1 });
    // Actions[Const.Router.DEMO2_SCREEN]();
  }

  render() {
    return (
      <View style={{marginTop:200}} >
        <TextInput
          placeholder={'Enter your name'}
          onChangeText={(input) => this.setState({ input })}
          value={this.state.input}
        />
        <TextInput
          placeholder={'Enter your name'}
          onChangeText={(input1) => this.setState({ input1 })}
          value={this.state.input1}
        />

        <TouchableOpacity onPress={() => this.onSubmitName1()}>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
//khởi tạo props redux
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
