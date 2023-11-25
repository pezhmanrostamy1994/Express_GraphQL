const { graphQlSchema } = require("../graphql/index.resolver");

 

const graphQlHttpConfig = (req,res)=>{ 
        return {
          schema: graphQlSchema,
          graphiql: true,
          context: { req, res },
        }; 
}

module.exports = { graphQlHttpConfig }