/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import DisplayList from './displayList';

export default class App extends Component{

  state = {
    todos: [ {title: "Create Project"},
             {title: "Deploy project"},
             {title: "Maintain project"}]
}

  render(){
    // console.log('test')
    return(
      <View style={styles.container}>
        {/* <Text style={styles.instructions}>Hello world!</Text> */}
        <DisplayList todos={this.state.todos} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#368ABC'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});