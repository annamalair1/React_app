     pipeline {
         agent any
         environment {
         KUBECONFIG = 'kubeconfig'
         }
         stages {
             stage('Build') {
                 steps {
                      withCredentials([usernamePassword(
                    credentialsId: 'spmyregistry',
                    usernameVariable: 'ACR_USERNAME',
                    passwordVariable: 'ACR_PASSWORD'
                )]){
                     script {
                          docker.build("myregistry03.azurecr.io/java-app:latest")
                          bat """
                              echo %ACR_PASSWORD% | docker login myregistry03.azurecr.io -u %ACR_USERNAME% --password-stdin
                              docker push myregistry03.azurecr.io/java-app:latest
                          """
                     }
                 }
                 }       
             }
               stage('Deploy') {
                    steps {
                        withCredentials([file(credentialsId: 'aks-kubeconfig', variable: 'kubeconfig')]){ 
                        script {
                            bat """
                            kubectl apply -f service.yaml
                            """
                        }}
                    }
               }
         }
     }
