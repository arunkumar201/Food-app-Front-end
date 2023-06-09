import { ApolloClient, InMemoryCache } from "@apollo/client";
//Normal Setup

const client = new ApolloClient({
	uri: import.meta.env.VITE_APP_GRAPHQL_URL,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

export default client;
