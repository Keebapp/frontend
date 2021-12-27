import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<FontAwesome size={26} name="code" color="#fff" style={styles.logo} />
			</View>
			<View style={styles.extras}>
				<FontAwesome
					size={24}
					name="search"
					color="#fff"
					style={[styles.icon, { marginRight: 20 }]}
				/>
				<FontAwesome
					size={24}
					name="ellipsis-h"
					color="#fff"
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
