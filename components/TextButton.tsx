import { Pressable, StyleSheet, Text, TextProps } from 'react-native';
import { RegularText } from './StyledText';

export default function TextButton(props: TextProps) {
	return (
		<Pressable onPress={() => alert('button tapped')} style={{ ...props }}>
			<RegularText style={styles.text}>{props.children}</RegularText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	text: {
		color: '#0A84FF',
		fontSize: 18,
		fontWeight: '600',
	},
});
