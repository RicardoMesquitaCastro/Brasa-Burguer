import React, { Component } from 'react';
import { View, Text } from 'react-native';




import styles from './styles';

export default class Badge extends Component {
	
//	const length = useSelector((state) => state.cart.length);
	render(){
	return (
		<View style={styles.container}>
			<Text style={styles.text}>0</Text>
		</View>
	);
}

}
//<Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
