# Lead Generation

## Project Overview
Lead Generation is a full-stack web application that allows users to manage leads efficiently. It features a **Next.js** frontend and a **Node.js + Express.js** backend, with MongoDB as the database. The backend exposes REST APIs for creating and fetching leads, while the frontend provides an intuitive UI using **Tailwind CSS**.

## Features
- **Create Leads**: A modal form allows users to add new leads.
- **View Leads**: Displays all leads fetched from the backend.
- **REST API Endpoints**:
  - `POST /leads` → Add a new lead
  - `GET /leads` → Fetch all leads
  - `GET /` → API health check
- **Modern UI/UX** with Tailwind CSS.

## 🛠 Technologies Used
### 🔹 Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- Nodemon (for development)

### 🔹 Frontend:
- Next.js
- Tailwind CSS
- React Hooks

##  Setup Instructions

###  Backend Setup
1. **Clone the Repository:**
   ```sh
   git clone <repository-url>
   cd lead-generation/backend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env` file and add your MongoDB connection string:
   ```sh
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/leads
   ```
4. **Start the Backend Server:**
   ```sh
   npm start   # For production
   npm run dev # For development (with Nodemon)
   ```
5. The API will run at `http://localhost:5000`.

### 📂 Frontend Setup
1. **Navigate to the Frontend Directory:**
   ```sh
   cd ../frontend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Next.js Development Server:**
   ```sh
   npm run dev
   ```
4. The site will be available at `http://localhost:3000`.

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/` | Check if API is working |
| **POST** | `/leads` | Add a new lead |
| **GET** | `/leads` | Fetch all leads |
