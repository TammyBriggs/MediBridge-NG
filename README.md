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
├── frontend/
├── dashboard/

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/TammyBriggs/MediBridge-NG.git
   cd MediBridge-NG
   
### Backend Setup
- cd backend
- In the backend folder, create a config folder and within it, download and paste the config.env file there
- npm install
- npm run dev

### Frontend (User) Setup
- cd frontend
- npm install
- npm run dev
  
### Frontend (Admin dashboard) Setup
- cd dashboard
- npm install
- npm run dev

- If you encounter "TypeError: crypto.getRandomValues is not a function", when running npm run dev in the project, it is probably an issue with your Node.js version.
- Running the following to update and use the lastest node.js version should get rid of the error.
  ```bash
   nvm install --lts  # Installs the latest LTS version
   nvm use --lts      # Switches to use the latest LTS version

## 🤝 Contributing
Contributions are welcome! Please open issues or submit PRs to help improve MediBridge NG.

## 📄 License
This project is licensed under the MIT License.

## 📢 Contact
Tamunotonye Briggs
Email: trenatto82@gmail.com
GitHub: [github.com/TammyBriggs](https://github.com/TammyBriggs)
