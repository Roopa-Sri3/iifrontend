pipeline{
    agent any
    stages{
        stage('Build'){
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'client/build/**/*', fingerprint: true
            }
        }
    }
}