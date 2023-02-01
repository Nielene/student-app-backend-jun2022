// bring in app
const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT;

// start server; 2 arguments: integer (port = 9000); an optional callback that runs when server starts
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
