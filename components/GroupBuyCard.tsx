import {
	GestureResponderEvent,
	ImageBackground,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { View } from 'react-native';
import { BoldText } from './StyledText';
import StyledLabel from './StyledLabel';

export default function GroupBuyCard(props: {
	style: object;
	title: string;
	subTitle: string;
	image: ImageSourcePropType;
	onPress: (event: GestureResponderEvent) => void;
}) {
	return (
		<Pressable style={[styles.card, props.style]} onPress={props.onPress}>
			<ImageBackground style={styles.image} source={props.image}>
				<BlurView intensity={5} tint="light" style={styles.blur}>
					<View style={styles.content}>
						<BoldText style={[styles.text, styles.title]} numberOfLines={3}>
							{props.title}
						</BoldText>
						<View style={styles.filler}>
							<StyledLabel>{props.subTitle}</StyledLabel>
							<View style={styles.filler} />
						</View>
					</View>
				</BlurView>
			</ImageBackground>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
	},
	image: {
		width: 240,
		height: 200,
	},
	blur: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 86,
		backgroundColor: 'rgba(27, 27, 27, 0.5)',
		borderRadius: 12,
		overflow: 'hidden',
	},
	content: {
		paddingVertical: 8,
		paddingHorizontal: 12,
		backgroundColor: 'rgba(0, 0, 0, 0)',
	},
	title: {
		height: 42,
		marginBottom: 8,
		fontSize: 14,
		lineHeight: 14,
	},
	text: {
		color: '#F5F5F5',
	},
	filler: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		flex: 1,
		flexDirection: 'row',
	},
});
