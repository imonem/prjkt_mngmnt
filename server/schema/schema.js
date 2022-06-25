const { projects, client, clients } = require('../sampleData');

const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql'); //bring object type, cuz when we have different resources we specify Object Types

//Client type
const ClientType = new GraphQLObjectType({
	name: 'Client',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return clients.find((client) => client.id === args.id);
			},
		},
	},
});
