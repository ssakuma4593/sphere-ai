/**
 * Sphere AI - Node.js Backend
 * Main application entry point for handling web requests and API endpoints.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'sphere-ai-node',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    features: {
      providerSearch: 'coming_soon',
      appointmentBooking: 'coming_soon',
      calendarIntegration: 'coming_soon',
      languageSupport: 'coming_soon'
    },
    supportedLanguages: ['en', 'es', 'fr', 'de', 'ja', 'ko', 'zh']
  });
});

// Placeholder for provider search endpoint
app.post('/api/search-providers', (req, res) => {
  const { language, specialty, location } = req.body;
  
  res.json({
    message: 'Provider search functionality coming soon!',
    searchCriteria: {
      language: language || 'en',
      specialty: specialty || 'general',
      location: location || 'unknown'
    },
    results: []
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.DEBUG === 'true' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint does not exist'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Sphere AI Node.js server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔍 Debug mode: ${process.env.DEBUG || 'false'}`);
});

module.exports = app;