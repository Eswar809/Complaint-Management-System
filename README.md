# Complaint Management System

A full-stack application built to manage user complaints efficiently. It includes a robust Spring Boot backend and a dynamic React.js frontend.

## 🛠️ Tech Stack

### Frontend (User Interface)
- **React.js**: Used for building the component-based user interface.
- **HTML/CSS/JS**: Core web technologies used for structure and styling.

### Backend (Server Side)
- **Java**: The primary programming language used for the backend.
- **Spring Boot**: Framework used to develop REST APIs.
- **Spring Data JPA**: Used for database interactions and Object-Relational Mapping (ORM).
- **Hibernate**: The default JPA implementation used for handling database schemas.
- **Maven**: Build and dependency management tool.

### Database
- **MySQL**: Relational database used for storing user and complaint data.

## ⚙️ Workflow

1. **Filing a Complaint / Registration**: Users can register complaints. Once data is entered on the frontend, the React app sends it to the Spring Boot backend via REST APIs.
2. **Data Processing**: Controllers in the backend receive the request and pass it to the Service layer for business logic execution.
3. **Data Storage**: The Service layer uses Spring Data JPA Repositories to save the processed data into the MySQL database.
4. **Fetching Data**: Whenever a user views the list of complaints or updates them, the frontend fetches the required data from the backend and displays it in the React UI.

## 🚀 How to Run the Project Locally

### 1. Database Setup (MySQL)
1. Ensure **MySQL server** is installed on your system.
2. Create a new database in MySQL (e.g., `cms_db`).
3. Open the `src/main/resources/application.properties` file in the project folder.
4. Update the following lines with your database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name?allowPublicKeyRetrieval=true&useSSL=false
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```

### 2. Backend Setup (Spring Boot)
1. Ensure **Java (JDK 11 or later)** and **Maven** are installed on your system.
2. Open a terminal and navigate to the project root directory (where the `pom.xml` file is located).
3. Run the following command to start the backend:
   ```bash
   mvn spring-boot:run
   ```
4. The backend server will start at `http://localhost:9000`.

### 3. Frontend Setup (React JS)
1. Ensure **Node.js** and **npm** are installed on your system.
2. Open a new terminal and navigate to the `ReactApp` folder:
   ```bash
   cd ReactApp
   ```
3. Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the React development server by running:
   ```bash
   npm start
   ```
5. The frontend will automatically open in your browser at `http://localhost:3000`.

---
**Note:** For the application to work properly, both the backend and frontend servers must be running simultaneously.