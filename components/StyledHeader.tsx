import {
	StyleSheet,
	Image,
	ImageSourcePropType,
	GestureResponderEvent,
	TouchableWithoutFeedback,
} from 'react-native';
import { View } from 'react-native';

export default function Header(props: { onPressLogo?: (event: GestureResponderEvent) => void }) {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				{/* <FontAwesome size={26} name="code" color="#fff" style={styles.logo} /> */}
				<TouchableWithoutFeedback onPress={props.onPressLogo}>
					<Image
						source={require('../assets/icons/logo512.png') as ImageSourcePropType}
						style={styles.logo}
					/>
				</TouchableWithoutFeedback>
			</View>
			<View style={styles.extras}>
				<Image
					source={require('../assets/icons/search.png') as ImageSourcePropType}
					style={[styles.icon, { marginRight: 20 }]}
				/>
				<Image
					source={require('../assets/icons/tripledot.png') as ImageSourcePropType}
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
