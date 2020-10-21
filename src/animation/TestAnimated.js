//https://medium.com/react-native-training/react-native-animations-using-the-animated-api-ebe8e0669fae
import React, { Component } from 'react';
import {
	View, 
	Text,
	Dimensions,
	TouchableOpacity,
	Animated,
} from 'react-native'; 

// We can use this to make the overlay fill the entire width
var { width, height } = Dimensions.get('window');

export default class TestAnimated extends Component {
	constructor () {
	  super()
	  this.springValue = new Animated.Value(0)
	}

	componentDidMount() {
	}

	spring = () => { 
		Animated.sequence([
			Animated.spring(
				this.springValue,
				{
				  toValue: width,
				  friction: 10000000,
				  useNativeDriver: true,
				}
			),
			Animated.spring(
				this.springValue,
				{
				  toValue: 0,
				  friction: 10000000,
				  useNativeDriver: true,
				}
			),
		]).start();
	}

	render(){
		console.log(this.springValue)
		return(
			<View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#2f2f2f' }}>
			  <Text
			    style={{marginLeft: 10, color: '#f7ac3b', fontSize: 25, fontWeight: '500'}}
			    onPress={this.spring}>Sliding</Text>
			    <Animated.View
			    	style={{
			    		backgroundColor: '#f7ac3b', 
			    		flex: 1,
					    position: 'absolute', 
					    width: this.springValue,
					    height: height,
					    justifyContent: 'center',
					    alignItems: 'flex-end'
					}}
			    >
			    	<Text style={{marginLeft: 10, color: '#2f2f2f', fontSize: 25, fontWeight: '500'}}>
			    	Sliding
			    	</Text>
			    </Animated.View>
			    <Animated.Image
			      source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
			</View>
		);
	}
}