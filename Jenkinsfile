pipeline {
    agent any

    tools {
        // Assume Maven and JDK are configured in Jenkins Global Tool Configuration
        maven 'Maven 3.8'
        jdk 'JDK 11'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add deployment steps here
            }
        }
    }
    
    post {
        always {
            junit 'target/surefire-reports/*.xml'
        }
    }
}
