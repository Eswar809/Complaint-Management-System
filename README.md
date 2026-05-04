# Complaint Management System

**What I built**
I developed a full-stack Complaint Management System to securely handle user grievances. The application features a Spring Boot (Java 17) REST API backend using Spring Data JPA with MySQL, and a component-driven React.js frontend. To mirror enterprise standards, I established CI/CD pipelines using GitHub Actions and Jenkins, implemented a dynamic frontend CSV export feature using native JavaScript `Blob` objects to minimize backend load, and deployed the system to handle concurrent client requests efficiently.

**What broke and what I figured out**
During integration, frontend requests were consistently blocked by CORS policy errors because my initial approach of using overly permissive `@CrossOrigin("*")` annotations was insecure and inadequate for production environments. Additionally, my CI/CD pipelines failed instantly due to a JDK version mismatch (runners defaulted to JDK 11, while the build required JDK 17). By centralizing the CORS policy into a dedicated `WebMvcConfigurer` bean and explicitly upgrading the CI runner configurations to JDK 17, I resolved both issues, heavily reinforcing the importance of centralized security and strict environment parity in deployments.

## How to Run Locally

### 1. Database Setup (MySQL)
Create a new MySQL database (e.g., `cms_db`). Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name?allowPublicKeyRetrieval=true&useSSL=false
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

### 2. Backend Setup (Spring Boot)
Requires Java (JDK 17+) and Maven.
```bash
mvn spring-boot:run
```
The server will start at `http://localhost:9000`.

### 3. Frontend Setup (React JS)
Requires Node.js and npm.
```bash
cd ReactApp
npm install
npm start
```
The frontend will open at `http://localhost:3000`. Both servers must be running simultaneously.