import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, keywords, description }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	);
};
Meta.defaultProps = {
	title: 'Welcome to Proshop',
	keywords: 'buy electronics, cheap electronics, electronics',
	description: 'We sell the best and cheapest electronics.'
};
export default Meta;
