import { Text, TextProps } from './Themed';

export function RegularText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SourceSansProRegular' }]} />;
}

export function BoldText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SourceSansProBold' }]} />;
}

export function ItalicText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SourceSansProItalic' }]} />;
}

export function ItalicBoldText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SourceSansProBoldItalic' }]} />;
}
