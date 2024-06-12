pipeline {
    agent any

    environment {
        DOCKER_PATH = "C:\\Programmes\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
       
        NODEJS_PATH = "C:\\Programmes (x86)\\nodejs"
        SONAR_SCANNER_HOME = C:\sonarqube\sonarqube-10.5.1.90531\bin\windows-x86-64"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        stage('Install Dependencies and Run Tests') {
            steps {
                script {
                    bat 'npm install'
                    //bat 'npm test --detectOpenHandles'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarquabe') {
                    bat '"C:\sonarqube\sonarqube-10.5.1.90531\bin\windows-x86-64\\sonar-scanner" -Dsonar.projectKey=microservice_examen'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construire l'image Docker avec élévation de privilèges
                    bat 'docker build -t amalseghaier/micro-examen:latest:%BUILD_ID% .'
                }
            }
        }
        stage('Tag Docker Image') {
            steps {
                script {
                    bat "docker tag amalseghaier/micro-examen:%BUILD_ID% amalseghaier/micro-examen:latest"
                }
            }
        }
        stage('Publish Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        bat 'docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%'
                        bat 'docker push amalseghaier/micro-examen:%BUILD_ID%'
                        bat 'docker push amalseghaier/micro-examen:latest'
                    }
                }
            }
        }
    }
}
