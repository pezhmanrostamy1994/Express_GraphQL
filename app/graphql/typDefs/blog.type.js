const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { userType } = require("./user.type");

const blogType = new GraphQLObjectType({
  name: "blogType",
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    image: { type: GraphQLString },
    user: { type: userType },
  },
});

const blogsListTypes = new GraphQLList(blogType);

module.exports = {
  blogType,
  blogsListTypes,
};
