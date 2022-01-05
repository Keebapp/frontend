import { StyleSheet, TextProps } from 'react-native';
import { BoldText } from './StyledText';

export default function StyledLabel(props: TextProps) {
	return <BoldText style={[styles.label, props.style]}>{props.children}</BoldText>;
}

const styles = StyleSheet.create({
	label: {
		fontSize: 12,
		paddingVertical: 2,
		paddingHorizontal: 12,
		backgroundColor: '#F5F5F5',
		borderRadius: 10,
		overflow: 'hidden',
		color: '#1E1E1E',
		flexGrow: 0,
		height: 20,
	},
});
