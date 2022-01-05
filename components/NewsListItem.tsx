import {
	Pressable,
	View,
	StyleSheet,
	ImageSourcePropType,
	GestureResponderEvent,
	Text,
	Image,
} from 'react-native';
import { BoldText, RegularText } from './StyledText';

export default function NewsListItem(props: {
	style?: object;
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
	onPress: (event: GestureResponderEvent) => void;
}) {
	return (
		<Pressable onPress={props.onPress} style={styles.container}>
			{/* <Text style={{ color: '#f5f5f5' }}>{props.title}</Text> */}
			<Image source={props.image} style={styles.image} />
			<View style={styles.textContainer}>
				<BoldText style={styles.title}>{props.title}</BoldText>
				<RegularText style={styles.subtitle}>{props.subTitle}</RegularText>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 108,
		borderRadius: 12,
		backgroundColor: '#282829',
		marginHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 64,
		height: 64,
		marginHorizontal: 12,
		borderRadius: 4,
	},
	textContainer: {
		flex: 1,
		height: 55,
		marginRight: 20,
	},
	title: {
		color: '#f5f5f5',
		fontSize: 14,
		flex: 1,
	},
	subtitle: {
		color: '#f5f5f5',
	},
});
