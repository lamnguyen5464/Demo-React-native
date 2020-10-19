import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: "",
    };
  }

  getByAxios = () => {
    this.setState({ status: "loading..." })
    axios.get('http://localhost:3000/students')
      .then((res) => {
        this.setState({ data: res.data, status: "success" });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ status: "Something goes wrong :( \nTry again" });
      })

  }

  postByAxios = () => {
    const student = {
      "id": 999,
      "name": 'chín', 
    }
    axios.post('http://localhost:3000/students', student)
    .then((res) => {
      console.log(res)
    })
  }

  getAPI = async () => {
    // fetch('http://localhost:3000/get')
    //   .then((res)=>
    //     res.json()
    //   )
    //   .then((resJson)=>{
    //     this.setState({data: resJson});
    //     console.log(this.state.data);
    //   })
    //   .catch((err)=>{console.log(err)})
    //   .finally(()=>console.log("end"))

    try {
      this.setState({ status: "loading..." })
      const res = await fetch('http://localhost:3000/students');
      const resJson = await res.json();
      console.log(resJson);
      this.setState({ data: resJson, status: "success" });
    } catch (e) {
      console.log(e);
      this.setState({ status: "Something goes wrong :( \nTry again" });
    }
  }
  render() {
    const { data, status } = this.state;
    return (
      <View style={{ marginTop: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       <TouchableOpacity onPress={this.postByAxios}>
          <Text style={{ fontSize: 20, }}>
            POST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getByAxios}>
          <Text style={{ fontSize: 20, }}>
            GET
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center' }}>
          {status === 'success' ?
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 20, }}>{item.id}. {item.name}</Text>
              )}
            /> : <Text>{status}</Text>
          }
        </View>
      </View>
    );
  }
}