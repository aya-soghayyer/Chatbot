# 📢 Chatbot for IT students in Hebron University (MiLo) <img src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bot-machine-robotic-future-things-and-ai-pack-technology-icons-6740636.png" width="50" height="50"> – Frontend Interface (Graduation Project)

A modern, responsive chatbot interface built with **React.js** and **Tailwind CSS**. This project serves as the **frontend** of a conversational AI system, supporting features like **live chat**, **message streaming**, **speech recognition**, and **image upload**.

---

## 🚀 Features

- 💬 Live Chat Interface  
- ⏱ Real-Time Streaming Responses  
- 🎤 Voice Input via React Speech Recognition 
- 📜 Chat History Panel  
- 🌗 Responsive Design (Mobile & Desktop)  
- 🛠️ **Admin Panel:** Manage users, view chat logs, and configure chatbot settings.  
- 🎓 **Student Chat:** Dedicated chat interface for students to generate lecture schedules and tables at the beginning of each semester.  
- 👥 **Guest Chat:** A public chat option for guests to inquire about university information and services.  
- 🔐 **Milo’s Password Management:**  
  - Change Milo’s password securely.  
  - Forgot password flow to reset Milo’s password via verification.  

---

## 🛠️ Tech Stack

| Tech         | Description                          |
|--------------|--------------------------------------|
| **React JS** | JavaScript UI library                |
| **Tailwind CSS** | Utility-first CSS framework     |
| **Vite**     | Lightning-fast frontend build tool   |
| **Fetch**    | HTTP client for API requests         |
| **FastAPI** *(Backend)* | Python web framework (separate repo) |

---

## 📂 Folder Structure

```bash
src/
│
├── assets/             # Static assets like images, sounds, and icons
├── components/         # Reusable and modular UI components (e.g., Navbar, Header)
├── hooks/              # Custom React hooks for logic reuse (e.g., usePhoto, useSpeech)
├── i18n/               # Internationalization (i18n) setup for translating app content
├── icons/              # Font Awesome icons
├── routes/             # file that sets up the app layout
├── services/           # Abstractions for API calls, speech service, and business logic
├── store/              # Global state management (e.g., Context API)
├── utils/              # General utility/helper functions (e.g., formatting, validation)
├── views/              # Page-level components or view containers (e.g., Home, Userchat, Login, Signup)
└── App.jsx             # Root component routing configuration (e.g., React Router definitions, routes, and providers)
```
---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/aya-soghayyer/Chatbot.git
cd Chatbot
```
### Install dependencies

```bash
npm install
```
### Run the app

```bash
npm run dev
```
---

## 🧠 How It Works
<img width="557" alt="image" src="https://github.com/user-attachments/assets/f2c35f3b-dfc5-40a1-bb7a-b89539db62dc" />

---

## 🎨 Project Pages Designs

The chatbot frontend is structured into several pages and layouts to support different user roles and functions:

### 🏠 Home Page
![image](https://github.com/user-attachments/assets/32a2328a-4003-49fb-8921-7d665bbf71cd)

### 👤 Guest Chat Page
![image](https://github.com/user-attachments/assets/bb3343d4-cf1c-4e28-800d-147ecfbbbdce)


### 🎓 Student Chat Page
![image](https://github.com/user-attachments/assets/ba7d2296-9af7-4d59-8823-89d42ae6452d)


### 🛠️ Admin Panel


### 🔐 Authentication Pages
- **Login Page:** For students and admins.
  ![image](https://github.com/user-attachments/assets/a4b6c064-c5f6-47df-a59f-8bad5a3f33fd)

- **Signup Page:** just for IT students at Hebron University.
  ![image](https://github.com/user-attachments/assets/378c2882-08e0-4fc3-b03e-2c8dd5ee6572)

- **Forgot Password Page:** token-based reset flow.
  ![image](https://github.com/user-attachments/assets/1e46efdc-cf2d-4727-9261-1fa61dff9c01)

- **Reset Password Page:** Set a new password after verification.
  
- **Change Password Page:** set a new milo password 
  ![image](https://github.com/user-attachments/assets/768f39b7-4f63-4bd0-bc9e-616b71617b9f)


### 📱 Responsive Design

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve or add.

---
## 📬 Contact
Aya Soghayyer
GitHub: @aya-soghayyer

---

## ✅ References

- React Documentation

- Tailwind CSS Docs

- FastAPI Docs

---

## 🚀 Deployment on Render

This project was deployed on [MiLo chatbot](https://www.chatbotmilo.online/) — a simple and powerful cloud platform for hosting frontend and backend apps.










