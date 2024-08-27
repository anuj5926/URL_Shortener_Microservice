pipeline{
      agent any
      tools {nodejs "Node"}
      stages {
            stage("Clone Repository"){
                steps{
                  git branch: 'main',
                       url :'https://github.com/anuj5926/URL_Shortener_Microservice.git'
                }
            }
      }
      stages('Install Dependencies'){
        steps{
          bat 'npm install'
        }
      }
  
      stages('Deploy'){
        steps{
          bat 'pm2 start index.js'
        }
      }
}
     
