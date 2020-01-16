import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../apollo-config';
import { LoadingBar } from '../components/loading-bar';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<ApolloProvider client={apollo}>
				<Component {...pageProps} />
				<LoadingBar />
			</ApolloProvider>
		);
	}
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
