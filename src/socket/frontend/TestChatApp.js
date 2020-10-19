import React, { Component, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class TestApp extends Component {

	state = {
		didTouch: false,
		mess: "",
		userId: 1,
		conversation: [ 
		],
		// socket: null,
	};

	componentDidMount() {
		this.socket = io("http://localhost:3000");
		this.socket.emit('join');
		this.listenData();
		// console.log("componentDidMount");
	}

	UNSAFE_componentWillMount() {
		// console.log("UNSAFE_componentWillMount");
	}

	UNSAFE_componentWillUpdate() {
		// console.log("UNSAFE_componentWillUpdate")
	}

	componentWillUnmount() {
		// console.log("conponentWillUnmount");
	}

	switch = () => {
		this.setState({ didTouch: !this.state.didTouch });
		this.setState({userId: (this.state.userId == 1) ? 2 : 1})
	}

	listenData = () => {
		this.socket.on('new msg', (mess) => {
			this.setState({conversation: GiftedChat.append(this.state.conversation, mess)});
		})
		console.log(this.state.conversation);
	}

	sendData = (mess) => {
		console.log("sendData", mess)
		this.setState({conversation: GiftedChat.append(this.state.conversation, mess)})
		console.log(this.state.conversation)
		this.socket.emit('sendData', mess);
	}

	render() {
		const { conversation } = this.state;
		return (
			<View style={{ flex: 1, alignContent: 'center', backgroundColor: '#fff', }}>

				{this.state.didTouch
					? <Header2 switch={this.switch} />
					: <Header switch={this.switch} />
				}

				<GiftedChat
					messages={conversation}
					onSend={mess => this.sendData(mess)}
					user={{
						_id: this.state.userId,
						name: (this.state.userId === 1) ? "Man 1" : "Woman 2",
					}}
				/>

			</View>
		);
	}
}

const Item = (props) => {
	return (
		<TouchableOpacity onPress={() => {
			props.onClick();
		}}>
			<View style={{
				borderRadius: 10,
				width: 200,
				height: 300,
				backgroundColor: '#e6e6e6',
			}}>

			</View>
		</TouchableOpacity>
	);
}

class Header extends Component {


	componentDidMount() {
		// console.log("Header componentDidMount");
	}

	UNSAFE_componentWillMount() {
		// console.log("Header UNSAFE_componentWillMount");
	}

	UNSAFE_componentWillUpdate() {
		// console.log("Header UNSAFE_componentWillUpdate")
	}

	componentWillUnmount() {
		// console.log("Header componentWillUnmount");
	}

	render() {
		return (
			<TouchableOpacity onPress={() => {
				this.props.switch();
			}}>
				<View style={{
					borderBottomRightRadius : 10,
					borderBottomLeftRadius : 10,
					height: windowHeight * 10 / 100,
					backgroundColor: '#fca903',
					justifyContent: 'flex-end',
					alignItems: 'center',
					shadowColor: '#000000',
					shadowOffset: {
						width: 0.5,
						height: 0.7
					},
					shadowRadius: 0,
					shadowOpacity: 1.0,
				}}>

					<Text> Person 1 </Text>
				</View>
			</TouchableOpacity>
		);
	}
}

class Header2 extends Component {

	state = {
		percent: 10,
	}

	componentDidMount() {
		// this.socket = io("http://localhost:3000");

		// this.socket.on("percent", (percent)=>{
		// 	this.setState({percent: percent})
		// })

		// this.socket.on('end', ()=>{
		// 	this.props.switch();
		// })
		// console.log("Header2 componentDidMount");
	}

	UNSAFE_componentWillMount() {
		// console.log("Header2 UNSAFE_componentWillMount");
	}

	UNSAFE_componentWillUpdate() {
		// console.log("Header2 UNSAFE_componentWillUpdate")
	}

	componentWillUnmount() {
		// this.socket.disconnect();
		// console.log("Header2 componentWillUnmount");
	}

	render() {
		return (
			<TouchableOpacity onPress={() => {
				this.props.switch();
			}}>
				<View style={{
					borderBottomRightRadius : 10,
					borderBottomLeftRadius : 10,
					height: windowHeight * this.state.percent / 100,
					backgroundColor: '#fc4e03',
					justifyContent: 'flex-end',
					alignItems: 'center',
					shadowColor: '#000000',
					shadowOffset: {
						width: 0.5,
						height: 0.7
					},
					shadowRadius: 0,
					shadowOpacity: 1.0,
				}}>

					<Text> Person 2 </Text>
				</View>
			</TouchableOpacity>
		);
	}
}