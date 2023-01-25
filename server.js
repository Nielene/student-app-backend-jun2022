// bring in app
const app = require("./app");

// start server; 2 arguments: integer (port = 9000); an optional callback that runs when server starts
app.listen(9000, () => console.log("listening on 9000"));
