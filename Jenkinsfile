pipeline {
    agent any 

    environment {
        REPO_URL = 'https://github.com/anuj5926/URL_Shortener_Microservice.git' // Replace with your repository UR
    }

    stages {
        stage('Clone or Update Repository') { 
            steps {
                script {
                    sh 'cp -ir /var/lib/jenkins/workspace/Dns /jenkinsData/'
                }
            }
        }
    }
}
