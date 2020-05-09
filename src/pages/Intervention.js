import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Logo from '../components/Logo';



class Intervention extends Component {
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

    const navigation = withNavigation();

    const { navigate } = navigation;
    return(
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigate('Elevator', { id: `${item.id}`, status: `${item.status}` })}>
            <Text>{"Elevator id: " + item.id}</Text>
          </TouchableOpacity>
        </View>
    )
  }

  render() {
    let {container, item, itemCont} = styles 
    let {dataSource, isLoading} = this.state
    console.log(this.displayName)
    
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    } else {
        return (
          <View style={container}>
            <Logo/>
            <FlatList
              data={dataSource}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
              
            <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
        )
    }

  }
}

export default withNavigation(Intervention);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginBottom: 20,
    fontSize: 100,
  },
  itemCont: {
    color: '#525588',
  },
  buttonText : {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign:'center'
  },
  button : {
      backgroundColor: '#808e95',
      marginVertical: 20,
      borderRadius: 25,
      width: 100,
      height: 50,
      paddingVertical: 13,
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  }
});
