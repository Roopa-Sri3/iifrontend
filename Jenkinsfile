pipeline{
    agent any
    stages{
        stage('Build-feature'){
            when{
                branch "feature"
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy-feature'){
            when{
                branch "feature"
            }
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/demo/build /var/www/'
            }
        }
        stage('Build-dev'){
            when{
                branch "dev"
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy-dev'){
            when{
                branch "dev"
            }
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/demo/build /var/www/'
            }
        }
        
    }
}