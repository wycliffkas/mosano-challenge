const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const app = express();
const port = 4000;

const data = {
	countries: [
		{
			name: "France",
			capital: "Paris",
			region: "Europe"
		},
		{
			name: "Spain",
			capital: "Madrid",
			region: "Europe"
		},
		{
			name: "Germany",
			capital: "Berlin",
			region: "Europe"
		},
		{
			name: "Portugal",
			capital: "Lisbon",
			region: "Europe"
		}
	]
};

const typeDefs = `
type Country {
  name: String
  capital: String
  region: String
}

type Query {
  countries: [Country]
}
`;

const resolvers = {
  Query: {
    countries: (obj, args, context) => context.countries,
  },
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})

// const express = require("express");
// const cors = require("cors");

// const countriesRouter = require("./routes/countries");

// const app = express();
// const port = 5000;

// app.use("/countries", countriesRouter);

// app.listen(port, () => console.log(`App is listening on port ${port}!`));
