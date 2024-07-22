pipeline{
    agent any
    stages{
        stage('Build'){
            when{
                branch "feature"
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            when{
                branch "feature"
            }
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/demo/build /var/www/'
            }
        }
        stage('Build'){
            when{
                branch "dev"
            }
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            when{
                branch "dev"
            }
            steps {
                sh 'cp -r /var/lib/jenkins/workspace/demo/build /var/www/'
            }
        }
        
    }
}