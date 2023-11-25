const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const userType = new GraphQLObjectType({
  name: "userType",
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString }, 
  },
});

module.exports = {
  userType,
};
