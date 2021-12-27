import { Text, TextProps } from './Themed';

export function TitleText(props: TextProps) {
	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: 'SourceSansProRegular',
					fontSize: 24,
					fontWeight: 'bold',
					color: '#F5F5F5',
				},
			]}
		/>
	);
}
