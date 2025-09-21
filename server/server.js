// Module imports
require("dotenv").config();
const routes = require("./routes/noteRoutes");
const connectDb = require("./config/mongoDb");
const logger = require("./middleware/logger");
const express = require("express");
const CORS = require("cors");
const PORT = process.env.PORT;
const app = express();

// Express don't parse REQUESTS Objects' contents that has JSON (application/json) in its header (Content-Type header). It reads the raw JSON payload from the request body and converts it into a usable JavaScript object, which is then stored in req.body
// Allow Cross-Origin Resource Sharing (CORS) on all routes. Both fronted and backend runs on distinct ports, so resource sharing might be blocked as part of basic browser security.
app.use(express.json());
app.use(CORS());

// Middleware for logging each requests
app.use(logger);

// Mount or consume all the routes inside
// If a path was specified (as first argument), it appends the all the routes unto that path or a route that matches it. Otherwise, it consumes all the routes inside. e.g. app.use("/user", route), all the routes inside route will append to the "/user" path, which results to "/user/routeInside"
app.use(process.env.BASE_API_URL, routes);

// Connect to the databse and start the server
connectDb(() => {
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
    console.log(`Base URL: ${process.env.BASE_API_URL}`);
  });
});
