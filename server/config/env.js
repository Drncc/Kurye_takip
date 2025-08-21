require('dotenv').config();

const config = {
  // MongoDB Atlas Connection String
  mongoUri: process.env.MONGODB_URI || 'mongodb+srv://admin:admin123@kuryetakip.imkinpp.mongodb.net/?retryWrites=true&w=majority&appName=kuryeTakip',
  
  // JWT Secret
  jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
  
  // Server Port
  port: process.env.PORT || 4000,
  
  // Environment
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // CORS Origin
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  
  // API Base URL
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:4000'
};

module.exports = config;