const express = require('express');
const app = express();
const cors = require('cors');
const processRoutes = require('./routes/processRoutes');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/api', processRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});