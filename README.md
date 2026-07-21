# 🎬 YouTube Clone

A full-stack YouTube Clone application built using **Java Spring Boot**, **React (Vite)**, **PostgreSQL**, and **JWT Authentication**.

---

# 📌 Project Description

This project is a YouTube-like video sharing platform where users can register, login securely, upload videos, and manage video content.

The backend is developed using Spring Boot with JWT authentication and PostgreSQL database integration.  
The frontend is built using React with Vite.

---

# 🚀 Features Completed

## Authentication Module

- User Registration
- User Login
- Password Encryption using BCrypt
- JWT Authentication
- Spring Security Configuration
- Protected API Routes
- PostgreSQL User Management


## Video Upload Module

## Video Module

- Video Upload API
- Thumbnail Upload API
- Multipart File Handling
- Video File Storage
- Thumbnail File Storage
- Upload Folder Management
- Video Entity Creation
- Video Repository
- Video Service Layer
- Video Controller
- Video Listing API
- Display Videos on Home Page
- React Video Card Component


---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- CSS
- Axios
- React Router
- Ant Design


## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- Maven
- BCrypt Password Encoder


## Database

- PostgreSQL


## Tools

- VS Code
- Git
- GitHub
- Postman
- Maven
- Ubuntu Linux


---

# 📂 Project Structure

```text
youtube-clone/
│
├── backend/
│   │
│   ├── src/main/java/com/kajal/backend
│   │
│   ├── config
│   │   └── PasswordConfig.java
│   │   └── WebConfig.java
│   ├── controller
│   │   ├── UserController.java
│   │   └── VideoController.java
│   │
│   ├── dto
│   │   ├── LoginRequest.java
│   │   ├── LoginResponse.java
│   │   ├── RegisterRequest.java
│   │   ├── UserResponse.java
│   │   ├── VideoRequest.java
│   │   └── VideoResponse.java
│   │
│   ├── entity
│   │   ├── User.java
│   │   └── Video.java
│   │
│   ├── repository
│   │   ├── UserRepository.java
│   │   └── VideoRepository.java
│   │
│   ├── security
│   │   ├── CustomUserDetailsService.java
│   │   ├── JwtFilter.java
│   │   ├── JwtService.java
│   │   └── SecurityConfig.java
│   │
│   ├── service
│   │   ├── UserService.java
│   │   └── VideoService.java
│   │
│   ├── resources
│   │   └── application.properties
│   │
│   ├── pom.xml
│   └── mvnw
│
│frontend/
│
├── src/
│
│   ├── api/
│   │   └── axios.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BottomNav.jsx
│   │   └── VideoCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── UploadVideo.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   ├── userService.js
│   │   └── videoService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
│
├── upload/
│   │
│   ├── videos/
│   │   └── uploaded video files
│   │
│   └── thumbnails/
│       └── uploaded thumbnail files
│
└── README.md
```

---
------------video Flow----------------------------
User
 |
 |
React Upload Page
 |
 |
Axios Multipart Request
 |
 |
VideoController
 |
 |
VideoService
 |
 |
Save Video File
 |
 |
Save Thumbnail File
 |
 |
Save Video Details
 |
 |
PostgreSQL Database
 |
 |
GET /api/videos
 |
 |
React Home Page
 |
 |
VideoCard Display
---

# ⚙ Backend Configuration

Video upload path configuration:

```properties
file.upload.video=/path/to/upload/videos/
file.upload.thumbnail=/path/to/upload/thumbnails/
```

File size configuration:

```properties
spring.servlet.multipart.max-file-size=500MB
spring.servlet.multipart.max-request-size=500MB
```

---

# 📥 Clone Repository

```bash
git clone https://github.com/kajalpadavi7-sketch/youtube-clone.git
```

Move into project:

```bash
cd youtube-clone
```

---

# 💻 Backend Setup

Go to backend:

```bash
cd backend
```

Run Spring Boot:

```bash
./mvnw spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

# 🌐 Frontend Setup

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔐 Authentication Flow

```text
React Client

      |
      ▼

Login API

      |
      ▼

Validate User Credentials

      |
      ▼

BCrypt Password Match

      |
      ▼

Generate JWT Token

      |
      ▼

Return Token

      |
      ▼

Access Protected APIs
```

---

# ✅ Completed Modules

- Spring Boot Project Setup
- PostgreSQL Database Integration
- User Entity
- User Repository
- Registration API
- Login API
- BCrypt Password Encryption
- JWT Authentication
- Spring Security
- React Frontend Setup
- React Router
- Axios Integration
- Registration Page
- Login Page
- Video Upload API
- Thumbnail Upload API
- Multipart File Handling
- Video Storage System
- Video Entity
- Video Repository
- Video Service


---

# 🚧 Upcoming Modules

- Video Database Management
- Video Listing API
- Home Feed
- Video Streaming
- Search Videos
- Comments
- Likes
- Subscriptions
- User Profile
- Watch History
- Playlists
- Notifications
- Recommended Videos
- Deployment


---

GitHub:

https://github.com/kajalpadavi7-sketch