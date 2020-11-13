const app = require('./app');

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
