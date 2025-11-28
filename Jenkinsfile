node {
    stage('Checkout') {
        git branch: 'react-app', url: 'https://github.com/rizkyprayatman/a428-cicd-labs.git'
    }

    docker.image('node:lts-buster-slim').inside {
        stage('Install') {
            sh 'npm ci'
        }

        stage('Build') {
            sh 'npm run build'
        }

        stage('Test') {
            sh 'npm test -- --watchAll=false'
        }
    }

    stage('Archive') {
        archiveArtifacts artifacts: 'build/**', fingerprint: true, allowEmptyArchive: false
    }
}
