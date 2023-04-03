// Base
const express = require("express");
const app = express();
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Methods
const connection = require("./db.connection");
const sessionAuth = require("../helpers/session.auth");
const cors = require("cors");
const { handleCorsPolicy } = require("../helpers/cors");

// Routes
const Routes = require("../routes/index.routes");

// MidWare
connection();
app.use(express.json());
app.use(sessionAuth);
app.use(cors());
app.use(handleCorsPolicy);
app.use(Routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
