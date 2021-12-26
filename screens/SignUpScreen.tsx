import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import FlatButton from '../components/StyledButton';

export default function SignUpScreen() {
	return (
		<View style={styles.container}>
			<FlatButton text="Sign up" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 500,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		paddingHorizontal: 44,
	},
});
