import {
	GestureResponderEvent,
	Image,
	ImageBackground,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { View } from 'react-native';
import { BoldText, RegularText } from './StyledText';
import StyledLabel from './StyledLabel';

export default function VideoCard(props: {
	style?: object;
	title: string;
	views: string;
	creator: { name: string; image: ImageSourcePropType };
	duration: string;
	image: ImageSourcePropType;
	onPress: (event: GestureResponderEvent) => void;
}) {
	return (
		<Pressable style={[styles.card, props.style]} onPress={props.onPress}>
			<ImageBackground source={props.image} style={styles.image}>
				<BlurView intensity={20} tint="dark" style={styles.duration}>
					<BoldText style={styles.time}>{props.duration}</BoldText>
				</BlurView>
				<BlurView intensity={20} tint="dark" style={styles.blur}>
					<View style={styles.blurContainer}>
						<BoldText style={styles.text}>{props.title}</BoldText>
					</View>
					<View style={[styles.blurContainer, styles.bottom]}>
						<Image source={props.creator.image} style={styles.creatorImage} />
						<RegularText style={styles.text}>
							{props.creator.name} ● {props.views}
						</RegularText>
					</View>
				</BlurView>
			</ImageBackground>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		overflow: 'hidden',
	},
	image: {
		width: 240,
		height: 240,
	},
	blur: {
		backgroundColor: 'rgba(27, 27, 27, 0.5)',
		position: 'absolute',
		bottom: 0,
		borderRadius: 12,
		overflow: 'hidden',
		height: 72,
		width: '100%',
		paddingTop: 8,
		paddingRight: 34,
		paddingLeft: 12,
		paddingBottom: 4,
	},
	blurContainer: {
		height: 30,
	},
	bottom: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: '#f5f5f5',
		fontSize: 10,
	},
	creatorImage: {
		width: 24,
		height: 24,
		borderRadius: 12,
		marginRight: 8,
	},
	duration: {
		position: 'absolute',
		backgroundColor: 'rgba(27, 27, 27, 0.5)',
		top: 8,
		left: 8,
		width: 50,
		height: 20,
		borderRadius: 4,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		color: '#f5f5f5',
		fontSize: 14,
	},
});
