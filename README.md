# Sightline Wealth Advisors (Rebuild)

A clean, sleek redesign of the Sightline Wealth Advisors website—built to modern market standards and designed to attract a newer customer line.

## 🛠️ Tech Stack

* **Frontend**: Next.js (TypeScript) + Tailwind CSS
* **Backend**: Python 3.10+ with FastAPI & Uvicorn
* **Deployment**: Hosted on GoDaddy (use cPanel for DNS configuration and uploading the built frontend; deploy the FastAPI backend via GoDaddy’s hosting tools)

## 🚀 Getting Started

### Frontend

````bash
cd frontend
npm install
npm run dev
```bash
cd frontend
npm install
npm run dev
````


### Backend

````bash
cd backend
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```bash
cd backend
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
````


## 📂 Repository Structure

```
sightline-wealth-advisors/
├── frontend/                 # Next.js + Tailwind app
│   ├── components/           # Reusable UI components
│   ├── pages/                # Application routes and pages
│   └── styles/               # Global and component-specific styles
├── backend/                  # FastAPI backend
│   ├── app/                  # FastAPI application modules
│   │   └── main.py           # Entry point for the API
│   ├── requirements.txt      # Python dependencies
│   └── .venv/                # Virtual environment
├── .gitignore                # Files and directories to ignore
└── README.md                 # Project overview and setup instructions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:

   ```bash
   git checkout -b feat/YourFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m "feat: add <your feature description>"
   ```
4. Push to the branch:

   ```bash
   git push origin feat/YourFeature
   ```
5. Open a Pull Request and describe your changes.

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

See the `LICENSE` file for full license text.
