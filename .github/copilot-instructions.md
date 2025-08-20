# Copilot Instructions for Sphere AI

## Project Overview
Sphere AI is a healthcare provider discovery and appointment booking platform that helps users find and book appointments with providers who speak their native language.

**Project Structure (Monorepo):**
- `frontend/` → Next.js application with Tailwind CSS
- `backend/` → FastAPI application (Python 3.10+)
- `data/` → JSON files for mock provider data
- `docs/` → Documentation and roadmaps

## Development Guidelines

### Frontend Development (`frontend/`)
- Use **Next.js** with **TypeScript** for all frontend code
- Style with **Tailwind CSS** following utility-first approach
- Follow TypeScript best practices:
  - Use strict type checking
  - Define interfaces for all data structures
  - Prefer functional components with hooks
  - Use proper error boundaries
- API routes should be exposed under `/api/*` pattern
- Components should be modular and reusable
- Use proper file naming conventions (kebab-case for files, PascalCase for components)

### Backend Development (`backend/`)
- Use **FastAPI** with **Python 3.10+**
- Follow Python best practices:
  - Use type hints for all function parameters and return values
  - Follow PEP 8 style guidelines
  - Use pydantic models for data validation
  - Implement proper error handling with HTTP status codes
- API routes should be organized under `/providers/*` for provider-related endpoints
- Include root health check endpoints (`/health`, `/`)
- Use async/await patterns for database and external API calls
- Implement proper logging and monitoring

### Data Management (`data/`)
- Store all mock data as **JSON files** in the `data/` directory
- Structure data files logically (e.g., `providers.json`, `languages.json`, `specialties.json`)
- Include data validation schemas
- Use consistent field naming (snake_case for JSON fields)
- Include sample data that represents real-world scenarios

### Documentation (`docs/`)
- All documentation should be in **Markdown** format
- Include:
  - Setup and installation guides
  - API documentation
  - Architecture decisions
  - Roadmaps and planning documents
- Keep documentation up-to-date with code changes
- Use clear headings and examples

## Code Quality Standards

### General Practices
- Write clean, self-documenting code
- Include unit tests for new features
- Use meaningful variable and function names
- Add comments only when necessary to explain complex logic
- Follow the principle of least privilege for API access

### API Design
- RESTful design principles
- Consistent response formats
- Proper HTTP status codes
- Include pagination for list endpoints
- Implement rate limiting where appropriate
- Use proper authentication/authorization

### Error Handling
- Frontend: Graceful error handling with user-friendly messages
- Backend: Structured error responses with appropriate HTTP status codes
- Log errors appropriately for debugging
- Never expose sensitive information in error messages

## Commit and Documentation Requirements

### When Adding New Features
1. **Always update the root `README.md`** with:
   - New setup steps if required
   - Feature descriptions
   - Usage examples
2. Update relevant documentation in `docs/`
3. Add or update tests as needed
4. Ensure backward compatibility

### Code Organization
- Keep components and modules focused on single responsibilities
- Use consistent folder structures within each section
- Group related functionality together
- Maintain clear separation between frontend and backend concerns

## Technology-Specific Guidelines

### Next.js Frontend
- Use App Router (not Pages Router) for new features
- Implement proper SEO with metadata
- Use Server Components where possible for better performance
- Implement proper loading states and error boundaries
- Use environment variables for configuration

### FastAPI Backend
- Use dependency injection for shared resources
- Implement proper CORS configuration
- Use background tasks for long-running operations
- Include comprehensive OpenAPI documentation
- Implement proper request/response validation

## Integration Points
- Frontend API calls should handle loading and error states
- Backend should provide consistent API responses
- Use proper data transformation between frontend and backend
- Implement proper authentication flow if needed
- Ensure data consistency between mock data and API responses