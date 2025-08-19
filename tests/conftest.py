"""
Test configuration and fixtures for Sphere AI Python tests.
"""

import pytest
import os
import sys

# Add src directory to Python path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src', 'python'))

@pytest.fixture
def app():
    """Create application fixture for testing."""
    from app import create_app
    
    app = create_app()
    app.config['TESTING'] = True
    app.config['DEBUG'] = False
    
    return app

@pytest.fixture
def client(app):
    """Create test client fixture."""
    return app.test_client()