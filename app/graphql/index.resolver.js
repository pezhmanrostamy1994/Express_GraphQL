const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { BlogResolver } = require("./queries/blog.resolver");
//query ,  mutation , schema , types
const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    blogs: BlogResolver,
  },
});
//
const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

const graphQlSchema = new GraphQLSchema({
  query: rootQuery,
  // mutationrootMutation :rootMutation
});

module.exports = {
  graphQlSchema,
};
