import React from 'react'
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native'

function Item({title}){
    console.log(title)
    return(
        <View style={styles.item}>
            <Text style={styles.title}>Title: {title}</Text>
        </View>
    )
}

export default class DisplayList extends React.Component{

    // state = {
    //     todos: [ "Create Project",
    //              "Deploy project",
    //              "Maintain project"]
    // }
    render(){
    //  console.log(this.props.todos)
        return(
            <SafeAreaView style={styles.container}>
                {/* {this.state.todos.map(todo => <Text>{todo}</Text>)} */}
                {/* {this.props.todos.map(todo => <Text>{todo.title}</Text>)} */}

                <FlatList data={this.props.todos} renderItem={({item}) => <Item title={item.title}/> } />

            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      backgroundColor: 'grey',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });