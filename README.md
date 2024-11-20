# Education Management API

## Overview
This API is designed to manage students, instructors, and courses in an educational platform. It includes role-based access control (RBAC) using JWT authentication and validation using AJV.

## Features
- **User Authentication**: Registration and login with JWT-based authentication.
- **Course Management**: CRUD operations for courses.
- **Validation**: API request validation with AJV.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedibrahimCIS/Education-Management-API.git
--------------------------------------------------------------------------
- Install dependencies -->  npm install.

- Create a .env file with your environment variables, including JWT secret.
  
- Start the server --> npm start

# API Endpoints 
- **POST** /register: Register a new user.
- **POST** /login: Login to get a JWT.
- **GET** /courses: Get all courses.
- **POST** /courses: Create a new course (admin access).

# Technologies Used
- **Node.js**
- **Express**
- **JWT Authentication**
- **AJV (for JSON schema validation)**
