"""
Main application entry point for Sphere AI Python backend.
"""

import os
from flask import Flask, jsonify
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


def create_app():
    """Create and configure the Flask application."""
    app = Flask(__name__)

    # Configuration
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key")
    app.config["DEBUG"] = os.getenv("DEBUG", "true").lower() == "true"

    @app.route("/")
    def health_check():
        """Health check endpoint."""
        return jsonify({
            "status": "healthy",
            "service": "sphere-ai-python",
            "version": "0.1.0"
        })

    @app.route("/api/providers")
    def get_providers():
        """Get healthcare providers endpoint (placeholder)."""
        return jsonify({
            "message": "Provider search functionality coming soon!",
            "supported_languages": ["en", "es", "fr", "de", "ja", "ko", "zh"]
        })

    return app


if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=app.config["DEBUG"])
