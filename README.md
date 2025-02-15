# University Insights - EdTech Platform

## 🚀 Project Overview
University Insights is a full-stack EdTech web application designed to streamline the scholarship application process and student-agent interactions. This project implements features such as **Application Tracking, AI Profile Matcher, and Scholarship Finder**, with authentication and role-based access control.

## 🌟 Features Implemented
- **User Authentication**: Secure login and role-based access for Students, Agents, and Admins.
- **Scholarship Finder**: Search and filter available scholarships based on user criteria.
- **Application Tracking**: Monitor the status of submitted applications.
- **Role-Based Dashboard**: Different views and functionalities for Students, Agents, and Admins.

## 🛠️ Tech Stack
### **Frontend**
- React.js
- Next.js
- Tailwind CSS

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose) / MySQL

### **Deployment**
- **Frontend**: Netlify
- **Backend**: Render / Heroku

## 📂 Project Structure
```
University-Insights-EdTech/
│── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│── README.md
```

## ⚙️ Setup and Installation
### **1. Clone the Repository**
```bash
git clone https://github.com/22Yash/University-Insights-EdTech.git
cd University-Insights-EdTech
```

### **2. Install Dependencies**
#### Backend Setup
```bash
cd backend
npm install
```
#### Frontend Setup
```bash
cd ../frontend
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the backend folder and add:
```
PORT=4000
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

### **4. Run the Application**
#### Start Backend
```bash
cd backend
npm start
```
#### Start Frontend
```bash
cd frontend
npm run dev
```

## 🚀 Deployment
### **Frontend Deployment on Netlify**
```bash
git add .
git commit -m "Deploy frontend"
git push origin main
```
Then, connect the repository to Netlify and deploy.

### **Backend Deployment on Render/Heroku**
Follow Render/Heroku deployment steps.



## 📜 License
This project is licensed under the MIT License.

---
**Developed by:** Yash Doke

