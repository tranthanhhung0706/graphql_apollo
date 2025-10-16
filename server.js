
const express = require('express');
 const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();
const PORT = 4000;

app.use('/graphql',expressGraphQL({
    graphiql:true
}))

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
