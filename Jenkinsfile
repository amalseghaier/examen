environment {
    NODEJS_HOME = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    CHROME_BIN = '/usr/bin/google-chrome'
    DOCKER_HUB_REGISTRY = 'docker.io'
}

stages {
    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Install dependencies') {
        steps {
            script {
                bat 'npm install'
                bat 'npm install node-pre-gyp'
            }
        }
    }

    stage('Build') {
        steps {
            bat 'npm run build'  // This runs the build script defined in package.json
        }
    }

    stage('SonarQube Analysis') {
        steps {
            script {
                withSonarQubeEnv('sonarqube') {
                    bat 'npm run sonarqube'  // Make sure this script is defined in package.json
                }
            }
        }
    }

    stage('Build Docker image') {
        steps {
            script {
                bat 'docker build --no-cache -t examen_kubernetes:latest -f Dockerfile .'
                bat 'docker tag examen_kubernetes:latest amalseghaier/examen_kubernetes:latest'
            }
        }
    }

    stage('Deploy Docker image') {
        steps {
            script {
                withCredentials([string(credentialsId: 'dockerHubeToken', variable: 'DOCKER_TOKEN')]) {
                    docker.withRegistry('https://index.docker.io/v1/', '12') {
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
    success {
        echo 'Build succeeded!'
    }

    failure {
        echo 'Build failed!'
    }
}
