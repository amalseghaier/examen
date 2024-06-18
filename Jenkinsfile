pipeline {
    agent any
    stages {
        stage('Build Docker image') {
            steps {
                script {
                    bat 'docker build -t examen_kubernetes:latest .'
                }
            }
        }

        stage('Tag Docker image') {
            steps {
                script {
                    bat 'docker tag examen_kubernetes:latest amalseghaier/examen_kubernetes:latest'
                }
            }
        }

        stage('Deploy Docker image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerHubToken', variable: 'DOCKER_TOKEN')]) {
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerHubToken') {
                            bat "docker image push amalseghaier/examen_kubernetes:latest"
                        }
                    }
                }
            }
        }

        stage('Kubernetes Deployment') {
            steps {
                script {
                    bat 'kubectl apply -f examen-deployment.yaml'
                }
            }
        }
    }
    post {
        always {
            echo 'Build finished'
        }
        success {
            echo 'Build succeeded'
        }
        failure {
            echo 'Build failed'
        }
    }
}
