

// =============================================================
// Dependencies
// =============================================================
const express = require(`express`);
const path = require(`path`);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require(`./models`);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(`public`));

// Routes
// =============================================================
require(`./controllers/shoesController.js`)(app);
require(`./controllers/vendorsController.js`)(app);
require(`./controllers/suppliersController.js`)(app);
require(`./controllers/salesController.js`)(app);

// Serve React App
// =============================================================
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});

