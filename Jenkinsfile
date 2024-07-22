pipeline{
    agent any
    stages{
        stage('Build'){
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/demo/build /var/www/'
            }
        }
        
    }
}