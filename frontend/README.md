# 🎬 YouTube Clone

YouTube Clone built using **Java Spring Boot**, **React (Vite)**, **PostgreSQL**, and **JWT Authentication**.

---

# 📌 Project Description


Currently completed:

- User Registration
- User Login
- Password Encryption using BCrypt
- JWT Authentication
- React Frontend Setup
- Registration connected with Backend
- Login connected with Backend
- JWT Token Generation

Upcoming modules include video upload, video streaming, comments, likes, playlists, subscriptions, and more.

---

# 🚀 Features Completed

- User Registration
- User Login
- BCrypt Password Encryption
- JWT Authentication
- React Registration Page
- React Login Page
- Spring Security Configuration
- PostgreSQL Database Integration
- REST APIs
- Axios Integration

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

## Database

- PostgreSQL

## Tools

- VS Code
- Git
- GitHub
- Postman
- Maven

---

# 📂 Project Structure

```text
youtube-clone/
│
├── backend
│   │
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── kajal
│   │   │   │           └── backend
│   │   │   │
│   │   │   │               ├── config
│   │   │   │               │     └── PasswordConfig.java
│   │   │   │               │
│   │   │   │               ├── controller
│   │   │   │               │     └── UserController.java
│   │   │   │               │
│   │   │   │               ├── dto
│   │   │   │               │     ├── LoginRequest.java
│   │   │   │               │     ├── LoginResponse.java
│   │   │   │               │     ├── RegisterRequest.java
│   │   │   │               │     └── UserResponse.java
│   │   │   │               │
│   │   │   │               ├── entity
│   │   │   │               │     └── User.java
│   │   │   │               │
│   │   │   │               ├── exception
│   │   │   │               │
│   │   │   │               ├── repository
│   │   │   │               │     └── UserRepository.java
│   │   │   │               │
│   │   │   │               ├── security
│   │   │   │               │     ├── CustomUserDetailsService.java
│   │   │   │               │     ├── JwtFilter.java
│   │   │   │               │     ├── JwtService.java
│   │   │   │               │     └── SecurityConfig.java
│   │   │   │               │
│   │   │   │               ├── service
│   │   │   │               │     └── UserService.java
│   │   │   │               │
│   │   │   │               ├── util
│   │   │   │               │
│   │   │   │               └── BackendApplication.java
│   │   │   │
│   │   │   └── resources
│   │   │       ├── static
│   │   │       ├── templates
│   │   │       └── application.properties
│   │   │
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── kajal
│   │                   └── backend
│   │                       └── BackendApplicationTests.java
│   │
│   ├── target
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
├── frontend
│   │
│   ├── node_modules
│   ├── public
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src
│   │   ├── api
│   │   │   └── axios.js
│   │   │
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │
│   │   ├── layouts
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── routes
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services
│   │   │   └── userService.js
│   │   │
│   │   ├── styles
│   │   │
│   │   ├── utils
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
└── uploads
```

---

# ⚙ Prerequisites

Before running this project, install:

- Java 21
- Maven
- PostgreSQL
- Node.js
- npm
- Git

---

# 📥 Clone Repository

```bash
git clone https://github.com/kajalpadavi7-sketch/youtube-clone.git
```

Move into the project directory:

```bash
cd youtube-clone
```

---

# 💻 Backend Setup

Move to backend folder

```bash
cd backend
```

Run Spring Boot application

```bash
mvn spring-boot:run
```

Or

```bash
./mvnw spring-boot:run
```

---

# 🌐 Frontend Setup

Move to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run React application

```bash
npm run dev
```

---

# 📦 Commands Used

## Git

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## Backend

```bash
mvn clean install
mvn spring-boot:run
```

## Frontend

```bash
npm install
npm run dev
```

---

# 🔐 Authentication

The project uses:

- Spring Security
- BCrypt Password Encoder
- JWT Authentication

Current Authentication Flow

```text
Client
   │
   ▼
Login API
   │
   ▼
Validate Email & Password
   │
   ▼
Generate JWT Token
   │
   ▼
Return Token to React
   │
   ▼
Store Token
```

---

# ✅ Completed Modules

- Spring Boot Setup
- PostgreSQL Configuration
- User Entity
- User Repository
- Registration API
- Login API
- BCrypt Password Encryption
- JWT Token Generation
- Spring Security
- React Setup
- React Router
- Registration Page
- Login Page
- Axios Configuration
- Registration Connected to Backend
- Login Connected to Backend

---

# 🚧 Upcoming Modules

- Video Upload
- Video Streaming
- Video List
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


GitHub: https://github.com/kajalpadavi7-sketch
