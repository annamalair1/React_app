     pipeline {
         agent any
         stages {
             stage('Build') {
                 steps {
                     script {
                         docker.build("myregistry03.azurecr.io/java-app:${env.BUILD_NUMBER}").push()
                     }
                 }
             }
         }
     }
