pipeline {
    agent any 

    environment {
        REPO_URL = 'https://github.com/anuj5926/URL_Shortener_Microservice.git' // Replace with your repository URL
        REPO_DIR = '/var/lib/jenkins/workspace/Dns' // The directory where the repo will be cloned
    }

    stages {
        stage('Clone or Update Repository') { 
            steps {
                script {
                    // Check if the repository directory exists
                    // if (fileExists(REPO_DIR)) {
                    //     dir(REPO_DIR) {
                    //         // If it exists, pull the latest changes
                    //         sh 'git pull origin main'
                    //     }
                    // } else {
                    //     // If it doesn't exist, clone the repository
                    //     sh "git clone ${REPO_URL} ${REPO_DIR}"
                    // }
                    sh 'cp -ir /var/lib/jenkins/workspace/Dns /opt/'
                }
            }
        }
        // stage('Build') { 
        //     steps {
        //         dir(REPO_DIR) {
        //             // Add your build commands here
        //             sh 'npm intsall' // Example build script
        //         }
        //     }
        // }
        // stage('Deploy') { 
        //     steps {
        //         dir(REPO_DIR) {
        //             // Add your deploy commands here
        //             sh 'pm2 start ./index.js' // Example deploy script
        //         }
        //     }
        // }
    }
}
