const express = require('express');
const cors = require('cors');
const graveRoutes = require('./routes/graveRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/graves', graveRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));