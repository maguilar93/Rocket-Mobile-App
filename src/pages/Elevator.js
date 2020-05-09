import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class Intervention extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    fetch('https://rocket-restapi.herokuapp.com/api/interventions')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      })
    })
  }

  _renderItem = ({item, index}) => {
    return(
      <TouchableOpacity onPress={() => alert(item.status)}>
        <View style={styles.item}>
          <Text>{"Elevator id: " + item.id}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    let {container, item} = styles 
    let {dataSource, isLoading} = this.state
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    } else {
        return (
          <View style={container}>
            <Text>These elevators are in intervention right now:</Text>
            <FlatList
              data={dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
    
            />
          </View>
        )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 20,
    fontSize: 100,
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  }
});
