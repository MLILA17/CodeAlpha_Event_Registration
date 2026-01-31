Sawa 👍
Hii hapa **README.md** ya **TASK 2: Event Registration System (Express.js + MongoDB)** — iko **assignment-ready**, clean, na professional. Unaweza **kunakili moja kwa moja**.

---

```md
# 📅 Event Registration System (Backend)

## 📌 Task 2 Overview
This project is a backend **Event Registration System** built using **Express.js** and **MongoDB**.  
It allows users to view events, register for events, manage their registrations, and supports authentication using JWT.

---

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Token)**
- **bcryptjs**
- **dotenv**
- **cors**

---

## 📁 Project Structure
``
event-system/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
│
├── routes/
│   ├── auth.js
│   ├── events.js
│   └── registrations.js
│
├── server.js
├── package.json
└── .env
``

---

## 🧩 Features
- User registration and login
- JWT-based authentication
- Create and view events
- Register for events
- View user registrations
- Cancel event registrations
- Role support (user / organizer / admin)

---

## 🗄️ Database Models

### User
- name
- email
- password (hashed)
- role

### Event
- title
- description
- date
- location
- createdBy

### Registration
- user
- event
- registeredAt

---

## 🔗 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

### 🎉 Events
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/events` | Create new event |
| GET | `/api/events` | Get all events |
| GET | `/api/events/:id` | Get event details |

---

### 📝 Registrations
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/registrations` | Register for an event |
| GET | `/api/registrations/user/:id` | View user registrations |
| DELETE | `/api/registrations/:id` | Cancel registration |

---

## ⚙️ Environment Variables
Create a `.env` file in the root directory:

```

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/eventdb
JWT_SECRET=your_secure_secret_key

````

---

## 🚀 Installation & Running

1. Clone the repository
```bash
git clone <repository-url>
cd event-system
````

2. Install dependencies

```bash
npm install
```

3. Start MongoDB locally

4. Run the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## ✅ Task Requirements Fulfilled

✔ Backend using Express.js
✔ Database models for users, events, and registrations
✔ API endpoints for viewing events and registering
✔ Linked registrations to users and events
✔ User registration management (view & cancel)
✔ Authentication using JWT

---

## 🔮 Future Improvements

* JWT route protection middleware
* Admin dashboard
* Event capacity limits
* Frontend integration
* Email notifications

---

## 👨‍💻 Author

**DML**

---

## 📜 License

This project is for educational purposes.

```
