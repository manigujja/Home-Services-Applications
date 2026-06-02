🏠 Home Services Booking System

A web-based Home Services Booking System developed using HTML, CSS, Java Servlets, JDBC, MySQL, and Apache Tomcat. This application allows users to book various home services such as AC repair, electrical work, plumbing, and cleaning services through an easy-to-use interface.

📌 Project Overview

The Home Services Booking System is designed to simplify the process of booking household services online. Users can select a service, provide their details, and submit a booking request. The application validates the user input and stores booking information in a MySQL database using JDBC connectivity.

🚀 Features
✅ User-Friendly Interface
Simple and responsive design
Easy navigation between pages
✅ Service Booking
AC Service
Electrical Service
Plumbing Service
Cleaning Service
✅ Form Validation
Required field validation
Prevents empty submissions
✅ Database Connectivity
JDBC integration with MySQL
Stores booking details securely
✅ Server-Side Processing
Java Servlets handle form submissions
Apache Tomcat deployment
🛠️ Technologies Used
Frontend
HTML5
CSS3
JavaScript
Backend
Java Servlets
JDBC (Java Database Connectivity)
Database
MySQL
Server
Apache Tomcat 9
📂 Project Structure
MyApps/
│
├── index.html
├── services.html
├── booking.html
├── contact.html
├── style.css
├── script.js
│
├── images/
│   ├── logo.png
│   ├── ac.jpg
│   ├── electrician.jpg
│   ├── plumber.jpg
│   └── cleaning.jpg
│
└── WEB-INF/
    ├── web.xml
    └── classes/
        └── BookingServlet.class
🔄 Project Workflow
Step 1

User opens the website.

Step 2

User navigates to the booking page.

Step 3

User enters:

Name
Phone Number
Service Type
Address
Step 4

Booking form is submitted to the Servlet.

Step 5

Servlet validates the user input.

Step 6

JDBC establishes a connection with MySQL.

Step 7

Booking information is stored in the database.

Step 8

User receives a booking confirmation message.

🗄️ Database Schema
Database
CREATE DATABASE student_db;
Table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    phone VARCHAR(15),
    service VARCHAR(50),
    address VARCHAR(100)
);
⚙️ Setup Instructions
1. Install Requirements
Java JDK
Apache Tomcat 9
MySQL Server
MySQL Connector JAR
2. Configure Database
CREATE DATABASE student_db;
USE student_db;

Create the bookings table using the SQL script above.

3. Add MySQL Connector

Copy:

mysql-connector-j-x.x.x.jar

to:

apache-tomcat-9.0.117/lib
4. Deploy Project

Copy project folder to:

apache-tomcat-9.0.117/webapps
5. Start Tomcat
startup.bat
6. Open Application
http://localhost:8080/MyApps
📸 Screenshots
Home Page
Landing page with service information.
Services Page
Displays available home services.
Booking Page
Allows users to submit booking requests.
Contact Page
Provides contact information.
🔮 Future Enhancements
User Registration & Login
Admin Dashboard
Booking Status Tracking
Email Notifications
Online Payment Integration
Service Provider Management
👨‍💻 Author

Gujja Mani Deekshith
Roll Number: 2023005719

📄 License

This project is developed for educational and academic purposes.
