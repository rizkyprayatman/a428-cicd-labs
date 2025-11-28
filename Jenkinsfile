node {

    stage('Checkout') {
        git branch: 'react-app', url: 'https://github.com/rizkyprayatman/a428-cicd-labs.git'
    }

    stage('Install Node 16') {
        sh '''
        curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
        apt-get update
        apt-get install -y nodejs
        node -v
        npm -v
        '''
    }

    stage('Install Dependencies') {
        sh 'npm install'
    }

    stage('Build React App') {
        sh 'npm run build'
    }

    stage('Test') {
        sh 'npm test -- --watchAll=false'
    }

    stage('Build Docker Image') {
        sh 'docker build -t react-app .'
    }

    stage('Run Container') {
        sh '''
        docker stop react-app || true
        docker rm react-app || true
        docker run -d -p 9000:80 --name react-app react-app
        '''
    }

    stage('Archive Build Artifacts') {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
    }
}
