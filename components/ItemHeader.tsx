import { StyleSheet, ViewProps } from 'react-native';
import TextButton from './TextButton';
import { View } from './Themed';
import { TitleText } from './TitleText';

export default function ItemHeader(props: { title: string; style: object }) {
	return (
		<View style={[styles.container, props.style]}>
			<View style={{ marginLeft: 24, justifyContent: 'center', flex: 1 }}>
				<TitleText>{props.title}</TitleText>
			</View>
			<View style={{ marginRight: 24, justifyContent: 'center' }}>
				<TextButton>View all</TextButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 58,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	title: {
		marginLeft: 24,
	},
	button: {
		marginRight: 24,
	},
});
