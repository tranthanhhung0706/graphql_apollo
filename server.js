
const express = require('express');
 const expressGraphQL = require('express-graphql').graphqlHTTP;
 const schema=require('./schema/schema');
const app = express();
const PORT = 4000;

app.use('/graphql',expressGraphQL({
    graphiql:true,
    schema
}))

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
