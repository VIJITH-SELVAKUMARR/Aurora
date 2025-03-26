# Aurora Travel - Django Website

## Overview
Aurora Travel is a modern, responsive travel website built with **Django**. It provides information about **Aurora Borealis tours**, including flights, accommodations, and vacation plans. The website features a dynamic homepage, a beautiful footer, and a clean, elegant UI.

## Features
- Dynamic homepage with Aurora Borealis theme
- Navigation bar with links to Home, About, Trips, Gallery, and Contact
- Responsive footer with social media links
- Static files handling (CSS, JavaScript, images)
- Organized file structure for maintainability

## Tech Stack
- **Backend:** Django 4.x
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (default) / PostgreSQL (optional)
- **Deployment:** Gunicorn, Whitenoise (for static files)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aurora-travel.git
cd aurora-travel
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run Migrations
```bash
python manage.py migrate
```

### 5. Start the Development Server
```bash
python manage.py runserver
```
Visit `http://127.0.0.1:8000/` in your browser.

## Project Structure
```
/aurora_project
│── aurora_app
│   ├── static/               # Static files (CSS, JS, Images)
│   ├── templates/            # HTML Templates
│   ├── views.py              # View logic
│── aurora_project/           # Project settings
│── manage.py                 # Django management script
│── requirements.txt          # Project dependencies
│── README.md                 # Project documentation
```

## Deployment
To deploy the project using **Gunicorn** and **Whitenoise**, follow these steps:

### 1. Install Deployment Dependencies
```bash
pip install gunicorn whitenoise
```

### 2. Configure `settings.py`
Modify `settings.py` to serve static files in production:
```python
import os
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

### 3. Run Collectstatic
```bash
python manage.py collectstatic
```

### 4. Run Gunicorn
```bash
gunicorn aurora_project.wsgi:application --bind 0.0.0.0:8000
```

## Contributing
Feel free to fork the repo, submit pull requests, or suggest new features!

## License
MIT License

