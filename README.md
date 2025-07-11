# 📝 Basic Blog Site

A fully functional blog web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** where users can:

- Register & log in securely
- Create, view, edit, and delete their blog posts
- View detailed blog content
- Manage their profile and blog entries
- Logout and securely handle session/authentication via JWT & cookies

🔗 **Live Demo**: [Visit the deployed app on Render](https://basic-blog-site.onrender.com)

---

## 🚀 Features

- 🔐 User authentication with JWT (access + refresh token)
- 📄 Create & manage blogs
- 🧑‍💻 Author-specific dashboard and profile page
- ✏️ Edit and delete blog posts from your profile
- 👁 View detailed blogs with unique IDs
- 💅 Basic CSS styling across pages
- 🧠 Protected routes and middleware-based authentication
- 🍪 Secure cookie management (with `httpOnly` cookies)

---

## 🛠️ Tech Stack

| Technology       | Purpose                                 |
|------------------|------------------------------------------|
| Node.js + Express| Backend server and API routing           |
| MongoDB + Mongoose| Database and schema modeling            |
| EJS              | Templating engine for dynamic HTML       |
| bcrypt           | Password hashing for secure authentication|
| JSON Web Token (JWT)| User session management               |
| dotenv           | Manage environment variables             |
| cookie-parser    | Read cookies from client requests        |
| Render           | Deployment platform                      |

---

## 📦 Environment Variables Setup

To run this project locally, create a `.env` file in the root directory based on the following structure:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=15m
JWT_REFRESH_SECRET=your_refresh_jwt_secret
JWT_REFRESH_EXPIRY=7d
NODE_ENV=development
