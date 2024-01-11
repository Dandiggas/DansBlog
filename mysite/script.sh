#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Start Gunicorn server
echo "Starting Gunicorn server"
gunicorn mysite.wsgi:application --bind 0.0.0.0:8000