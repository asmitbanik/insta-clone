# Social Media App (Insta-Clone)

A full-stack social media application inspired by Instagram, built with Node.js, Express, MongoDB (Mongoose), and React.

## Project Structure

```
/socialMedia
├── backend/    # Node.js + Express API
│   ├── src/
│   │   ├── config/        # DB and cloud configs
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # Express routes
│   │   ├── controllers/   # Request logic
│   │   ├── middleware/    # Auth, error, uploads
│   │   ├── utils/         # Helpers
│   │   ├── app.js         # Express app config
│   │   └── server.js      # Entry point
│   ├── package.json
│   └── .env
│
├── frontend/   # React app
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
└── .gitignore
```

## Features
- User authentication (JWT)
- Profile management
- Create, like, and comment on posts
- Image upload with Cloudinary
- Responsive React frontend

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB database

### Backend Setup
1. `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file (see `.env.example` or README in `backend/`)
4. Start server: `npm run dev`

### Frontend Setup
1. `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file (see `.env.example` or README in `frontend/`)
4. Start React app: `npm start`

## Folder Details
- See `README.md` in each folder for detailed explanations of files and code.

## License
MIT
