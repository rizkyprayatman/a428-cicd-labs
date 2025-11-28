node {
    stage('Checkout') {
        git branch: 'react-app', url: 'https://github.com/rizkyprayatman/a428-cicd-labs.git'
    }

    stage('Install Node') {
        sh 'curl -fsSL https://deb.nodesource.com/setup_16.x | bash -'
        sh 'apt-get install -y nodejs'
    }

    stage('Install Dependencies') {
        sh 'npm ci'
    }

    stage('Build') {
        sh 'npm run build'
    }

    stage('Test') {
        sh 'npm test -- --watchAll=false'
    }

    stage('Archive') {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
    }
}
