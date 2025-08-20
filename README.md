# Sphere AI

**Find and book appointments with healthcare providers who speak your native language**

Sphere AI is a comprehensive healthcare platform that connects patients with medical providers based on language preferences, specialties, and location. Our AI-powered system makes it easy to find, communicate with, and book appointments with healthcare professionals who can serve you in your preferred language.

![Sphere AI Interface](https://github.com/user-attachments/assets/d9f4fe37-3eb2-4937-ae07-cec0ccafa356)

## Features

- **Language-First Search**: Find providers who speak your native language
- **Specialty Matching**: Search by medical specialty (Primary Care, Cardiology, etc.)
- **Location-Based**: Find providers in your area
- **AI-Powered Recommendations**: Get personalized provider suggestions
- **Easy Booking**: Streamlined appointment scheduling process

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: FastAPI with Python
- **Data**: JSON-based provider database (expanding to full database solution)
- **AI**: Coming soon - intelligent chat interface for natural language booking

## Project Structure

```
sphere-ai/
├── frontend/          # Next.js React application
├── backend/           # FastAPI Python application
├── data/             # Provider data and mock files
├── docs/             # Documentation and project roadmap
└── README.md         # This file
```

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.8+ and pip

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```

The backend will be available at `http://localhost:8000`

- Health check: `GET http://localhost:8000/`
- Provider search: `POST http://localhost:8000/providers/search`

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

- Main application: `http://localhost:3000`
- Health check: `GET http://localhost:3000/api/health`

## API Endpoints

### Backend (FastAPI)

- `GET /` - Health check endpoint
- `POST /providers/search` - Search for providers
  - Body: `{ "language": "Korean", "specialty": "Primary Care", "location": "Boston" }`

### Frontend (Next.js)

- `GET /api/health` - Frontend health check

## Example Usage

Search for a Korean-speaking primary care provider in Boston:

```bash
curl -X POST http://localhost:8000/providers/search \
  -H "Content-Type: application/json" \
  -d '{"language": "Korean", "specialty": "Primary Care", "location": "Boston"}'
```

## Development Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for detailed sprint planning and feature development timeline.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both frontend and backend
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
