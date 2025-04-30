     pipeline {
         agent any
         stages {
             stage('Build') {
                 steps {
                      withCredentials([usernamePassword(
                    credentialsId: 'spmyregistry',
                    usernameVariable: 'ACR_USERNAME',
                    passwordVariable: 'ACR_PASSWORD'
                )]){
                     script {
                          docker.build("myregistry03.azurecr.io/java-app:${env.BUILD_NUMBER}")
                          bat """
                              echo %ACR_PASSWORD% | docker login myregistry03.azurecr.io -u %ACR_USERNAME% --password-stdin
                              docker push myregistry03.azurecr.io/java-app:${env.BUILD_NUMBER}
                          """
                     }
                 }
                 }       
             }
         }
     }
