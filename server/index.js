const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); //req instead of app.use schema: schema_name
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	}),
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
