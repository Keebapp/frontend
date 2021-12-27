import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Image } from 'react-native';
import { View } from './Themed';

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{/* <FontAwesome size={26} name="code" color="#fff" style={styles.logo} /> */}
				<Image source={require('../assets/icons/logo512.png')} style={styles.logo} />
			</View>
			<View style={styles.extras}>
				<Image
					source={require('../assets/icons/search.png')}
					style={[styles.icon, { marginRight: 20 }]}
				/>
				<Image
					source={require('../assets/icons/tripledot.png')}
					style={[styles.icon, { marginRight: 24 }]}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 48,
		justifyContent: 'center',
	},
	left: {
		flex: 1,
		justifyContent: 'center',
	},
	logo: {
		marginLeft: 24,
		width: 52,
		height: 26,
	},
	extras: {
		flexDirection: 'row',
	},
	icon: {
		marginVertical: 12,
		width: 24,
		height: 24,
	},
});
