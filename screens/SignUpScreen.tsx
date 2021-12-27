import { StyleSheet, SafeAreaView } from 'react-native';
import FlatButton from '../components/StyledButton';

export default function SignUpScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<FlatButton text="Sign up" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#1e1e1e',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
});
