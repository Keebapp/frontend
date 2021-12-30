import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	FlatList,
	ImageSourcePropType,
	Platform,
} from 'react-native';
import GroupBuyCard from '../components/GroupBuyCard';
import ItemHeader from '../components/ItemHeader';
import Header from '../components/StyledHeader';
import { View } from 'react-native';
import { TitleText } from '../components/TitleText';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useRef, useState } from 'react';
import NewsListItem from '../components/NewsListItem';
import VideoCard from '../components/VideoCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const groupBuys = [
	{
		id: 0,
		title: '[GB] DISCPLINE 65 & DISCIPAD Hi-Profile Pre-Orders + GIVEAWAY - Keyz.io',
		desc: '3 days remaining',
		image: require('../assets/images/dummy/gb1.png') as ImageSourcePropType,
	},
	{
		id: 1,
		title: '[GB] DISCPLINE 65 & DISCIPAD Hi-Profile Pre-Orders + GIVEAWAY - Keyz.io',
		desc: '5 days remaining',
		image: require('../assets/images/dummy/gb1.png') as ImageSourcePropType,
	},
	{
		id: 2,
		title: '[GB] DISCPLINE 65 & DISCIPAD Hi-Profile Pre-Orders + GIVEAWAY - Keyz.io',
		desc: '7 days remaining',
		image: require('../assets/images/dummy/gb1.png') as ImageSourcePropType,
	},
];

const interestChecks = [
	{
		id: 0,
		title: '[IC] BINEPAD BN009 - 9 KEY MACROPAD',
		desc: '32/100 until goal met',
		image: require('../assets/images/dummy/ic.png') as ImageSourcePropType,
	},
	{
		id: 1,
		title: '[IC] BINEPAD BN009 - 9 KEY MACROPAD',
		desc: '77/100 until goal met',
		image: require('../assets/images/dummy/ic.png') as ImageSourcePropType,
	},
	{
		id: 2,
		title: '[IC] BINEPAD BN009 - 9 KEY MACROPAD',
		desc: '56/100 until goal met',
		image: require('../assets/images/dummy/ic.png') as ImageSourcePropType,
	},
];

const news = [
	[
		{
			id: 0,
			title: 'New KBDfans products, August 2021',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news1.png') as ImageSourcePropType,
		},
		{
			id: 1,
			title: 'New KBDfans products, August 2021',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news1.png') as ImageSourcePropType,
		},
		{
			id: 2,
			title: 'New KBDfans products, August 2021',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news1.png') as ImageSourcePropType,
		},
		{
			id: 3,
			title: 'New KBDfans products, August 2021',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news1.png') as ImageSourcePropType,
		},
		{
			id: 4,
			title: 'New KBDfans products, August 2021',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news1.png') as ImageSourcePropType,
		},
	],
	[
		{
			id: 0,
			title: 'Customized deskmats available',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news2.png') as ImageSourcePropType,
		},
		{
			id: 1,
			title: 'Customized deskmats available',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news2.png') as ImageSourcePropType,
		},
		{
			id: 2,
			title: 'Customized deskmats available',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news2.png') as ImageSourcePropType,
		},
		{
			id: 3,
			title: 'Customized deskmats available',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news2.png') as ImageSourcePropType,
		},
		{
			id: 4,
			title: 'Customized deskmats available',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news2.png') as ImageSourcePropType,
		},
	],
	[
		{
			id: 0,
			title: 'ePBT Fall | 40s Revealed',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news3.png') as ImageSourcePropType,
		},
		{
			id: 1,
			title: 'ePBT Fall | 40s Revealed',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news3.png') as ImageSourcePropType,
		},
		{
			id: 2,
			title: 'ePBT Fall | 40s Revealed',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news3.png') as ImageSourcePropType,
		},
		{
			id: 3,
			title: 'ePBT Fall | 40s Revealed',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news3.png') as ImageSourcePropType,
		},
		{
			id: 4,
			title: 'ePBT Fall | 40s Revealed',
			desc: 'Posted 20 hours ago',
			image: require('../assets/images/dummy/news3.png') as ImageSourcePropType,
		},
	],
];

const videos = [
	{
		id: 0,
		title: 'Mode SixtyFive with lubed Cherry MX Blacks Typing Sounds ASMR',
		creator: {
			name: 'TaehaTypes',
			image: require('../assets/images/dummy/taeha.png') as ImageSourcePropType,
		},
		views: '326',
		duration: '12:05',
		image: require('../assets/images/dummy/video.png') as ImageSourcePropType,
	},
	{
		id: 1,
		title: 'Mode SixtyFive with lubed Cherry MX Blacks Typing Sounds ASMR',
		creator: {
			name: 'TaehaTypes',
			image: require('../assets/images/dummy/taeha.png') as ImageSourcePropType,
		},
		views: '5M',
		duration: '6:54',
		image: require('../assets/images/dummy/video.png') as ImageSourcePropType,
	},
	{
		id: 2,
		title: 'Mode SixtyFive with lubed Cherry MX Blacks Typing Sounds ASMR',
		creator: {
			name: 'TaehaTypes',
			image: require('../assets/images/dummy/taeha.png') as ImageSourcePropType,
		},
		views: '1K',
		duration: '1:54:17',
		image: require('../assets/images/dummy/video.png') as ImageSourcePropType,
	},
];

export default function Feed() {
	const [newsIndex, setNewsIndex] = useState(0);
	const [videoIndex, setVideoIndex] = useState(0);

	const insets = useSafeAreaInsets();

	const scrollRef = useRef<ScrollView>(null);

	const onPressLogo = () => {
		scrollRef.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	return (
		<SafeAreaView
			style={[styles.container, { marginTop: Platform.OS == 'android' ? insets.top : 0 }]}>
			<Header onPressLogo={onPressLogo} />
			<ScrollView ref={scrollRef}>
				<ItemHeader style={styles.header} title="Ongoing Groupbuys" />
				<FlatList
					style={styles.content}
					data={groupBuys}
					keyExtractor={(groupBuy) => groupBuy.id.toString()}
					renderItem={({ item }) => (
						<GroupBuyCard
							style={{ marginLeft: 24 }}
							title={item.title}
							subTitle={item.desc}
							image={item.image}
							onPress={() => alert('Card pressed')}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				<ItemHeader style={styles.header} title="Popular interest check" />
				<FlatList
					style={styles.content}
					data={interestChecks}
					keyExtractor={(interestCheck) => interestCheck.id.toString()}
					renderItem={({ item }) => (
						<GroupBuyCard
							style={{ marginLeft: 24 }}
							title={item.title}
							subTitle={item.desc}
							image={item.image}
							onPress={() => alert('Card pressed')}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				<ItemHeader style={styles.header} title="Keyboard news" />
				<SegmentedControl
					style={styles.segmentPicker}
					tintColor="#0A84FF"
					values={['Hot', 'Most read', 'Top this week']}
					selectedIndex={newsIndex}
					onChange={(event) => setNewsIndex(event.nativeEvent.selectedSegmentIndex)}
					fontStyle={{ color: '#939394' }}
					activeFontStyle={{ color: '#f5f5f5' }}
				/>
				<FlatList
					style={{ marginBottom: 8 }}
					data={news[newsIndex]}
					keyExtractor={(news) => news.id.toString()}
					renderItem={({ item }) => (
						<NewsListItem
							title={item.title}
							subTitle={item.desc}
							image={item.image}
							onPress={() => alert('News item pressed')}
						/>
					)}
					ItemSeparatorComponent={() => <View style={{ width: '100%', height: 16 }} />}
					nestedScrollEnabled
				/>
				<ItemHeader style={styles.header} title="Top Community Videos" />
				<SegmentedControl
					style={styles.segmentPicker}
					tintColor="#0A84FF"
					values={['Today', 'This week', 'All time']}
					selectedIndex={videoIndex}
					onChange={(event) => setVideoIndex(event.nativeEvent.selectedSegmentIndex)}
					fontStyle={{ color: '#939394' }}
					activeFontStyle={{ color: '#f5f5f5' }}
				/>
				<FlatList
					data={videos}
					keyExtractor={(video) => video.id.toString()}
					renderItem={({ item }) => (
						<VideoCard
							style={{ marginLeft: 24 }}
							title={item.title}
							image={item.image}
							creator={item.creator}
							views={item.views}
							duration={item.duration}
							onPress={() => alert('video tapped')}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				<View style={{ height: 64 }} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#1e1e1e',
	},
	header: {
		marginTop: 24,
	},
	content: {
		marginBottom: 0,
	},
	segmentPicker: {
		marginHorizontal: 16,
		marginBottom: 24,
		backgroundColor: 'rgba(40,40,41,255)',
	},
});
