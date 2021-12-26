import { FontSource, useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './screens/SignUpScreen';

export default function App() {
	const [loaded] = useFonts({
		SourceSansProRegular: require('./assets/fonts/SourceSansPro-Regular.ttf') as FontSource,
		SourceSansProBold: require('./assets/fonts/SourceSansPro-Bold.ttf') as FontSource,
		SourceSansProBoldItalic:
			require('./assets/fonts/SourceSansPro-BoldItalic.ttf') as FontSource,
		SourceSansProItalic: require('./assets/fonts/SourceSansPro-Italic.ttf') as FontSource,
	});

	if (!loaded) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<SignUpScreen />
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
