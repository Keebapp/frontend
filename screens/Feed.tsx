import { StyleSheet, SafeAreaView, ScrollView, FlatList, ImageSourcePropType } from 'react-native';
import GroupBuyCard from '../components/GroupBuyCard';
import ItemHeader from '../components/ItemHeader';
import Header from '../components/StyledHeader';
import { View } from 'react-native';
import { TitleText } from '../components/TitleText';

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

export default function Feed() {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<ScrollView>
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
		marginBottom: 48,
	},
});
