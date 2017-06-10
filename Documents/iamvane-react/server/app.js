const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve('./../public')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.render('./../public/index.html'));
});

app.listen(3000, => (){
	console.log(`listening on port 3000`);
})
module.exports = app;