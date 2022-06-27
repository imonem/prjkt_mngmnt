import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';

//warning https://stackoverflow.com/questions/66121208/defining-custom-merge-function-to-resolve-inmemorycache-merge-in-graphql
const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache, //using the cache variable to get around the warning shown in the comment above
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<div className='container'>
					<AddClientModal />
					<Clients />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
