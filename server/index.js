const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const { port, corsOrigin, nodeEnv } = require('./config/env');
const path = require('path');

const app = express();

// CORS Configuration - Production için güvenli
const corsOptions = {
  origin: function (origin, callback) {
    // Development'da localhost'a izin ver
    if (nodeEnv === 'development') {
      return callback(null, true);
    }
    
    // Production'da sadece belirli domain'lere izin ver
    const allowedOrigins = [
      corsOrigin,
      'https://yourdomain.com', // Production domain'inizi buraya ekleyin
      'https://www.yourdomain.com'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/couriers', require('./routes/couriers'));
app.use('/api/shops', require('./routes/shops'));
app.use('/api/orders', require('./routes/orders'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: nodeEnv,
    database: 'Connected'
  });
});

// Admin panel route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`🌍 Environment: ${nodeEnv}`);
      console.log(`📊 MongoDB Atlas: Connected`);
      console.log(`🔒 CORS Origin: ${corsOrigin}`);
    });
  } catch (error) {
    console.error('❌ Server start failed:', error);
    process.exit(1);
  }
};

startServer();