import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../apollo-config';
import { Template } from '../components/template';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<ApolloProvider client={apollo}>
				<Template>
					<Component {...pageProps} />
				</Template>
			</ApolloProvider>
		);
	}
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
