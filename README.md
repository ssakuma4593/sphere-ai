# sphere-ai

Finds and books appointments for providers who speak your native language

Input - language and type of healthcare professional you're looking for  
Output - list of provider options and ability to book through AI with calendar confirmation

## 🚀 Quick Start

### Prerequisites

- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ssakuma4593/sphere-ai.git
   cd sphere-ai
   ```

2. **Set up Python environment**
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Set up Node.js environment**
   ```bash
   # Install Node.js dependencies
   npm install
   ```

4. **Configure environment variables**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env file with your API keys and configuration
   ```

### Running the Application

#### Python Backend (Flask/FastAPI)
```bash
# Activate virtual environment first
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Run Python server
cd src/python
python app.py
```
The Python server will be available at `http://localhost:5000`

#### Node.js Backend (Express)
```bash
# Run Node.js server
npm start

# Or for development with auto-reload
npm run dev
```
The Node.js server will be available at `http://localhost:3000`

## 🧪 Testing

### Python Tests
```bash
# Run Python tests
pytest tests/test_python_app.py

# Run with coverage
pytest tests/test_python_app.py --cov=src/python
```

### Node.js Tests
```bash
# Run Node.js tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Code Quality

#### Python
```bash
# Format code
black src/python

# Lint code
flake8 src/python

# Type checking
mypy src/python
```

#### Node.js
```bash
# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
sphere-ai/
├── src/
│   ├── python/          # Python backend (Flask/FastAPI)
│   │   ├── __init__.py
│   │   └── app.py
│   └── node/            # Node.js backend (Express)
│       └── index.js
├── tests/               # Test files
│   ├── conftest.py
│   ├── test_python_app.py
│   └── test_node_app.js
├── config/              # Configuration files
├── docs/                # Documentation
├── .github/
│   └── workflows/       # CI/CD workflows
│       └── ci-cd.yml
├── requirements.txt     # Python dependencies
├── package.json         # Node.js dependencies
├── pyproject.toml       # Python project configuration
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🔧 Configuration

Key environment variables (see `.env.example`):

- `OPENAI_API_KEY`: OpenAI API key for AI functionality
- `GOOGLE_MAPS_API_KEY`: Google Maps API key for location services
- `GOOGLE_CALENDAR_CLIENT_ID/SECRET`: Google Calendar integration
- `DATABASE_URL`: Database connection string
- `DEBUG`: Enable/disable debug mode
- `PORT`: Server port configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔄 CI/CD

The project includes GitHub Actions workflows for:
- Python testing (multiple Python versions)
- Node.js testing (multiple Node versions)
- Code quality checks (linting, formatting, type checking)
- Integration testing

## 🚧 Roadmap

- [ ] AI-powered provider search functionality
- [ ] Multi-language support for search queries
- [ ] Calendar integration for appointment booking
- [ ] Provider rating and review system
- [ ] Mobile app development
- [ ] Real-time appointment availability
