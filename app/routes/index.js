const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { graphQlHttpConfig } = require("../utils/graphQl.config");
const router = express.Router();

router.use("/graphQl", graphqlHTTP(graphQlHttpConfig));

module.exports = router;
