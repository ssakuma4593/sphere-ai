"""
Test Python Flask application endpoints.
"""

def test_health_check(client):
    """Test the health check endpoint."""
    response = client.get('/')
    assert response.status_code == 200
    data = response.get_json()
    assert data['status'] == 'healthy'
    assert data['service'] == 'sphere-ai-python'
    assert data['version'] == '0.1.0'

def test_providers_endpoint(client):
    """Test the providers endpoint."""
    response = client.get('/api/providers')
    assert response.status_code == 200
    data = response.get_json()
    assert 'supported_languages' in data
    assert isinstance(data['supported_languages'], list)
    assert 'en' in data['supported_languages']