const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Add this
const scholarshipRoutes = require('./routes/scholarshipRoutes');

dotenv.config();

// Initialize Express
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend to access
    credentials: true,
}));

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/login', authRoutes); // ✅ Add login route
app.use('/api/scholarships', scholarshipRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
