import * as React from 'react';
import renderer from 'react-test-renderer';

import { RegularText } from '../StyledText';

it('renders correctly', () => {
	const tree = renderer.create(<RegularText>Snapshot test!</RegularText>).toJSON();

	expect(tree).toMatchSnapshot();
});
