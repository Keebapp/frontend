import { StyleSheet, Pressable } from 'react-native';
import { RegularText } from './StyledText';

export default function FlatButton({ text }: { text: string }) {
	return (
		<Pressable
			style={styles.button}
			onPress={() => {
				alert('You tapped the button!');
			}}>
			<RegularText style={styles.buttonText}>{text}</RegularText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 12,
		paddingVertical: 12,
		paddingHorizontal: 77,
		backgroundColor: '#0A84FF',
		width: 327,
		height: 46,
	},
	buttonText: {
		color: '#F5F5F5',
		fontWeight: '600',
		textTransform: 'none',
		fontSize: 18,
		textAlign: 'center',
	},
});
