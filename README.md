# MediBridge NG 🏥

**MediBridge NG** is a robust and scalable full-stack hospital management system built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It is designed to modernize healthcare administration by digitizing patient records, enabling efficient staff workflows, and providing secure access to data.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**  
  - Secure user authentication using **JSON Web Tokens (JWT)**
  - Role-based access for **Admins, Nurses, and Doctors**
  - Separate login flows for users and administrators

- 🧩 **Modular Backend Architecture**  
  - Clean folder structure following **MVC pattern**
  - Reusable middleware and centralized error handling
  - Environment-based configuration using `.env`

- 🧠 **User & Admin Frontends**  
  - Dual React interfaces:
    - **User Portal** for nurses/doctors to view and manage patient records
    - **Admin Dashboard** for hospital administrators to manage staff, appointments, and system settings

- 💾 **MongoDB Integration**  
  - Schemas for **users**, **patients**, **appointments**, and **medical records**
  - Mongoose for efficient data modeling

- 🛡️ **Security Best Practices**  
  - Password hashing with **bcrypt**
  - JWT refresh and access tokens with token expiry and renewal
  - Secure API routes using Express middleware

- 📈 **Scalable Design**  
  - Designed for extensibility and future growth
  - Backend and frontend structured for containerization and CI/CD

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **MongoDB** | NoSQL Database |
| **Express.js** | Backend framework |
| **React.js** | Frontend library |
| **Node.js** | Backend runtime |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |

---

## 📂 Folder Structure

medibridge-ng/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend-user/
├── frontend-admin/
└── .env

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/TammyBriggs/MediBridge-NG.git
   cd MediBridge-NG
Backend Setup

bash
Copy
Edit
cd backend
npm install
npm run dev
Frontend (User) Setup

bash
Copy
Edit
cd frontend-user
npm install
npm start
Frontend (Admin) Setup

bash
Copy
Edit
cd frontend-admin
npm install
npm start

🤝 Contributing
Contributions are welcome! Please open issues or submit PRs to help improve MediBridge NG.

📄 License
This project is licensed under the MIT License.

📢 Contact
Tamunotonye Briggs
Email: trenatto82@gmail.com
GitHub: github.com/TammyBriggs
