pipeline{
      agent any
      stages {
            stage("Clone Repository"){
                steps{
                  git branch: 'main',
                       url :'https://github.com/anuj5926/URL_Shortener_Microservice.git'
                }
            }
      stage('Install Dependencies'){
        steps{
          bat 'npm install'
        }
      }
  
      stage('Deploy'){
        steps{
          bat 'pm2 start index.js'
        }
      }
      }
}
     
